import { NextResponse } from 'next/server';
import axios from 'axios';

// Define the route handler
export async function GET(req: Request) {
    try {
        // Get dynamic parameters from the URL (e.g., date, dining-common-code, meal-code)
        const { searchParams } = new URL(req.url);
        const date = searchParams.get('date'); // e.g., 2025-01-11
        const diningCommonCode = searchParams.get('dining-common-code'); // e.g., de-la-guerra
        const mealCode = searchParams.get('meal-code'); // e.g., lunch

        if (!date || !diningCommonCode || !mealCode) {
            return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
        }

        const apiKey = process.env.UCSB_API_KEY; // Make sure to set the API key in .env.local

        // Construct the full URL for the API request
        const url = `https://api.ucsb.edu/dining/menu/v1/${date}/${diningCommonCode}/${mealCode}`;
        console.log('Making request to UCSB API with URL:', url);


        const response = await axios.get(url, {
            headers: {
                'ucsb-api-key': apiKey,
                'Content-Type': 'application/json',
            },
        });

        return NextResponse.json(response.data); // Return the response from the UCSB Dining API
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}