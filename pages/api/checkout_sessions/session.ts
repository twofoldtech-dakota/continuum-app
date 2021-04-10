import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2020-08-27' });

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let priceID = process.env.YEARLY_PRICE_KEY;
    const { isMonthlyPrice } = req.body;

    if (isMonthlyPrice) {
        priceID = process.env.MONTHLY_PRICE_KEY
    }
    
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                billing_address_collection: 'required',
                line_items: [{
                    price: priceID,
                    quantity: 1,
                }],
                mode: 'subscription',
                allow_promotion_codes: true,

                success_url: `${req.headers.origin}/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
            })
            res.status(200).json({ sessionId: session.id })
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: { statusCode: 500, message: err.message } });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }

    // if (req.method === 'POST') {
    //     const amount: number = req.body.amount;
    //     try {
    //         // Validate the amount that was passed from the client.
    //         if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
    //             throw new Error('Invalid amount.');
    //         }
    //         // Create Checkout Sessions from body params.
    //         const params: stripe.SessionCreateParams = {
    //             submit_type: 'donate',
    //             payment_method_types: ['card'],
    //             line_items: [
    //             {
    //                 name: 'Custom amount donation',
    //                 amount: formatAmountForStripe(amount, CURRENCY),
    //                 currency: CURRENCY,
    //                 quantity: 1,
    //             },
    //             ],
    //             success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    //             cancel_url: `${req.headers.origin}/checkout`,
    //         };
    //         const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
    //             params
    //         );

    //         res.status(200).json(checkoutSession);
    //     } catch (err) {
    //         res.status(500).json({ statusCode: 500, message: err.message });
    //     }
    // } else {
    //     res.setHeader('Allow', 'POST');
    //     res.status(405).end('Method Not Allowed');
    // }
}
