import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const handleClick = async () => {
        //call backend to create the checkout session
        console.log('click');
        const { sessionId } = await fetch('/api/checkout_sessions/session', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({isMonthlyPrice: true})
        }).then(res => res.json());

        console.log('sessionID: ' + sessionId)

        //when the customer clicks, redirect to checkout
        const stripe = await stripePromise;
        const { error } = await stripe?.redirectToCheckout({ sessionId });
    }

    return (
        <div>
            
            
            <h1>Checkout</h1>
            <button role='link' onClick={handleClick}>Checkout</button>
        </div>
    );
}

// import { GetServerSideProps } from "next";
// import { loadStripe } from "@stripe/stripe-js";
// import Stripe from "stripe";

// interface IPrice extends Stripe.Price {
//   product: Stripe.Product;
// }

// interface IProps {
//   prices: IPrice[];
// }

// export default function Checkout({ prices }: IProps) {
//     const createCheckoutSession = require("next-stripe/client");
//     const onClick = async (priceId: string) => {
//     const session = await createCheckoutSession({
//       success_url: window.location.href,
//       cancel_url: window.location.href,
//       line_items: [{ price: priceId, quantity: 1 }],
//       payment_method_types: ["card"],
//       mode: "payment",
//     });
//         let publicKey: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
//     const stripe = await loadStripe(publicKey);
//     if (stripe) {
//       stripe.redirectToCheckout({ sessionId: session.id });
//     }
//   };

//   return (
//     <div>
//       <h1>Programmer For Hire</h1>

//       <ul>
//         {prices.map((price) => (
//           <li key={price.id}>
//             <h2>{price.product.name}</h2>
//             <img src={price.product.images[0]} />
//             <p>Cost: ${((price.unit_amount as number) / 100).toFixed(2)}</p>
//             <button onClick={() => onClick(price.id)}>Buy</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//     let secretKey: any = process.env.STRIPE_SECRET_KEY;
//   const stripe = new Stripe(secretKey, {
//     apiVersion: "2020-08-27",
//   });

//   const prices = await stripe.prices.list({
//     active: true,
//     limit: 10,
//     expand: ["data.product"],
//   });

//   return { props: { prices: prices.data } };
// };