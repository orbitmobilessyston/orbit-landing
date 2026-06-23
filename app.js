/* ==========================================================================
   Orbit Mobiles Landing Page - Simplified WhatsApp Script
   ========================================================================== */

// CONFIGURATION: Replace with your exact WhatsApp mobile number (with country code, no + or 00)
// Example: If your UK number is 07700 900077, enter: "447700900077"
const WHATSAPP_NUMBER = "447708877665";

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("whatsapp-inquiry-form");
    
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Extract values
            const clientName = document.getElementById("cust-name").value.trim();
            const clientDevice = document.getElementById("cust-device").value.trim();
            const clientIssue = document.getElementById("cust-issue").value.trim();
            
            // Verify validation
            if (!clientName || !clientDevice || !clientIssue) {
                alert("Please fill in all required fields.");
                return;
            }
            
            // Construct message text
            const messageText = 
`Hello Orbit Mobiles! I would like a repair quote:

*Name:* ${clientName}
*Device:* ${clientDevice}
*Details / Issue:* ${clientIssue}`;
            
            // Encode message for URL
            const encodedText = encodeURIComponent(messageText);
            
            // Generate WhatsApp URL
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
            
            // Redirect customer to WhatsApp (opens in a new tab)
            window.open(whatsappUrl, '_blank');
        });
    }
});
