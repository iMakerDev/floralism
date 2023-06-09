
import { loadStripe } from '@stripe/stripe-js';
import {useEffect} from 'react'
export default function DynamicStripe() {
    const stripePromise = loadStripe(
       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY   
     );

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            ////////////console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            ////////////console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);



    return (<form action="/api/checkout_sessions" method="POST">
        <section>
            <button type="submit" role="link">
                Checkout
            </button>
        </section>
    </form>)
}