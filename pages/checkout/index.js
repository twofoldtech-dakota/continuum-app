"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var stripe_js_1 = require("@stripe/stripe-js");
var stripePromise = stripe_js_1.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
function Checkout() {
    var _this = this;
    var handleClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var sessionId, stripe, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //call backend to create the checkout session
                    console.log('click');
                    return [4 /*yield*/, fetch('/api/checkout_sessions/session', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({ isMonthlyPrice: true })
                        }).then(function (res) { return res.json(); })];
                case 1:
                    sessionId = (_a.sent()).sessionId;
                    console.log('sessionID: ' + sessionId);
                    return [4 /*yield*/, stripePromise];
                case 2:
                    stripe = _a.sent();
                    return [4 /*yield*/, (stripe === null || stripe === void 0 ? void 0 : stripe.redirectToCheckout({ sessionId: sessionId }))];
                case 3:
                    error = (_a.sent()).error;
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement("h1", null, "Checkout"),
        React.createElement("button", { role: 'link', onClick: handleClick }, "Checkout")));
}
exports["default"] = Checkout;
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
