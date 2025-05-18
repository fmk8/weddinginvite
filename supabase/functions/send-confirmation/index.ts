import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { Resend } from "npm:resend@1.0.0"; // Ensure to use the correct version
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY environment variable not set");
}
const resend = new Resend(resendApiKey); // Using environment variable for API key
Deno.serve(async (req)=>{
  if (req.method === "POST") {
    const { data, error } = await supabaseClient.from("rsvp").select("*").order("created_at", {
      ascending: false
    }).limit(1);
    if (error) {
      return new Response(JSON.stringify({
        error: error.message
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey, X-Client-Info, X-Client-Trace"
        }
      });
    }
    const rsvpEntry = data[0];
    if (rsvpEntry) {
      const emailContent = `
        <h1>RSVP Confirmation</h1>
        <p>Thank you for your RSVP, ${rsvpEntry.full_name}!</p>
        <p>Details:</p>
        <ul>
          <li>Family Name: ${rsvpEntry.family_name}</li>
          <li>Guest Type: ${rsvpEntry.guest_type}</li>
          <li>Attending: ${rsvpEntry.attending ? "Yes" : "No"}</li>
          <li>Guest Count: ${rsvpEntry.guest_count}</li>
          <li>Allergies: ${rsvpEntry.allergies || "None"}</li>
          <li>Notes: ${rsvpEntry.notes || "None"}</li>
        </ul>
      `;
      await resend.sendEmail({
        from: "Wedding Invitation <weddingfn2025@gmail.com>",
        to: rsvpEntry.email,
        subject: "RSVP Confirmation",
        html: emailContent
      });
    }
    return new Response(JSON.stringify({
      message: "Email sent successfully!"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey, X-Client-Info, X-Client-Trace"
      }
    });
  }
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey, X-Client-Info, X-Client-Trace",
        "Access-Control-Max-Age": "86400"
      }
    });
  }
  
  return new Response("Method not allowed", {
    status: 405,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    }
  });
});
