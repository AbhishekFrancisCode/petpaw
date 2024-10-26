import { DOMAIN, baseURL } from "@/config";
import axios from "axios";
import { NextResponse } from "next/server";

// Refernece: https://www.youtube.com/watch?v=gEB3ckYeZF4
export async function POST(request: Request) {
  const data = await request.formData();

  // const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");

  const options = {
    method: "GET",
    url: `${baseURL}payments/check-payment-status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
      // Authorization: "",
    }
  };

  // CHECK PAYMENT STATUS
  const response = await axios.request(options);

  // a 301 status is required to redirect from a POST to a GET route
  if (response.data.data.code == "PAYMENT_SUCCESS") {
    return NextResponse.redirect(`${DOMAIN}success/${transactionId}`, {
      status: 301
    });
  } else {
    return NextResponse.redirect(`${DOMAIN}failure/${transactionId}`, {
      status: 301
    });
  }

  // return NextResponse.json({
  //   ...response.data.data,
  // });
}
