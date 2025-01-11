import { NextResponse } from 'next/server';
import axios from 'axios';

// Define the route handler
export async function GET(req: Request) {
    try {
      
        const { searchParams } = new URL(req.url);
        const date = searchParams.get('date'); 
        const diningCommonCode = searchParams.get('dining-common-code'); 
        const mealCode = searchParams.get('meal-code');

        if (!date || !diningCommonCode || !mealCode) {
            return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
        }

        const apiKey = process.env.UCSB_API_KEY;

        const url = `https://api.ucsb.edu/dining/menu/v1/${date}/${diningCommonCode}/${mealCode}`;
        console.log('Making request to UCSB API with URL:', url);


        const response = await axios.get(url, {
            headers: {
                'ucsb-api-key': apiKey,
                'Content-Type': 'application/json',
            },
        });

        return NextResponse.json(response.data); 
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}