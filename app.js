/* ==========================================================================
   Orbit Mobiles Landing Page - Simplified WhatsApp Script
   ========================================================================== */

// CONFIGURATION: Replace with your exact WhatsApp mobile number (with country code, no + or 00)
// Example: If your UK number is 07700 900077, enter: "447700900077"
const WHATSAPP_NUMBER = "447708877665";

// Branch Locations Dataset
const BRANCH_DATA = {
    syston: {
        address: "8 Town Square, Syston, Leicester, LE7 1GZ",
        email: "orbitmobilessyston@gmail.com",
        phone: "07708877665",
        whatsapp: "447708877665",
        hours: `
            <p>Monday – Saturday: 10:00 AM – 5:30 PM</p>
            <p>Sunday: 10:30 AM – 5:30 PM</p>
        `,
        mapUrl: "https://maps.app.goo.gl/3svjeAL4McvLhqTK9",
        iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.8305335043465!2d-1.075994!3d52.6991531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879d944ede8d3b7%3A0x96e57c54c6f8471e!2sOrbit%20Mobiles%20Syston!5e0!3m2!1sen!2suk!4v1719140000000!5m2!1sen!2suk"
    },
    leicester: {
        address: "222 Narborough Road, Leicester, LE3 2AN",
        email: "orbitmobilesleicester@gmail.com",
        phone: "07502223335",
        whatsapp: "447502223335",
        hours: `
            <p>Monday – Sunday: 10:00 AM – 6:30 PM</p>
        `,
        mapUrl: "https://share.google/5F9slbvE9aoVmUz2h",
        iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.385458392557!2d-1.1578795!3d52.6206013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760c6d3b3c3b3%3A0x8e8e8e8e8e8e8e8e!2s222%20Narborough%20Rd%2C%20Leicester%20LE3%202AN%2C%20UK!5e0!3m2!1sen!2suk!4v1719140000000!5m2!1sen!2suk"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("whatsapp-inquiry-form");
    const branchSelect = document.getElementById("cust-branch");
    
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Extract values
            const clientName = document.getElementById("cust-name").value.trim();
            const clientDevice = document.getElementById("cust-device").value.trim();
            const clientIssue = document.getElementById("cust-issue").value.trim();
            const selectedBranch = branchSelect ? branchSelect.value : "syston";
            
            // Verify validation
            if (!clientName || !clientDevice || !clientIssue) {
                alert("Please fill in all required fields.");
                return;
            }
            
            const branchName = selectedBranch === "syston" ? "Syston Shop" : "Leicester Shop";
            const targetPhone = BRANCH_DATA[selectedBranch] ? BRANCH_DATA[selectedBranch].whatsapp : WHATSAPP_NUMBER;
            
            // Construct message text
            const messageText = 
`Hello Orbit Mobiles! I would like a repair quote:

*Shop Location:* ${branchName}
*Name:* ${clientName}
*Device:* ${clientDevice}
*Details / Issue:* ${clientIssue}`;
            
            // Encode message for URL
            const encodedText = encodeURIComponent(messageText);
            
            // Generate WhatsApp URL
            const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;
            
            // Redirect customer to WhatsApp (opens in a new tab)
            window.open(whatsappUrl, '_blank');
        });
    }

    // Branch Switching Logic
    const branchTabs = document.querySelectorAll(".branch-tab");
    const branchAddress = document.getElementById("branch-address");
    const branchEmail = document.getElementById("branch-email");
    const branchPhone = document.getElementById("branch-phone");
    const branchHours = document.getElementById("branch-hours");
    const branchMapBtn = document.getElementById("branch-map-btn");
    const branchMapIframe = document.getElementById("branch-map-iframe");

    if (branchTabs.length > 0 && branchAddress && branchHours && branchMapBtn && branchMapIframe) {
        branchTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                // Remove active class from all tabs
                branchTabs.forEach(t => t.classList.remove("active"));
                
                // Add active class to clicked tab
                tab.classList.add("active");
                
                // Get branch key
                const branchKey = tab.getAttribute("data-branch");
                const data = BRANCH_DATA[branchKey];
                
                if (data) {
                    // Update content
                    branchAddress.textContent = data.address;
                    
                    if (branchEmail) {
                        branchEmail.textContent = data.email;
                        branchEmail.href = `mailto:${data.email}`;
                    }
                    if (branchPhone) {
                        branchPhone.textContent = data.phone;
                        branchPhone.href = `tel:${data.phone}`;
                    }
                    
                    branchHours.innerHTML = data.hours;
                    branchMapBtn.href = data.mapUrl;
                    branchMapIframe.src = data.iframeSrc;

                    // Sync the dropdown in the form with active tab
                    if (branchSelect) {
                        branchSelect.value = branchKey;
                    }
                }
            });
        });
    }

    // Sync dropdown changes to toggle the correct tab active
    if (branchSelect) {
        branchSelect.addEventListener("change", () => {
            const selectedVal = branchSelect.value;
            const targetTab = document.querySelector(`.branch-tab[data-branch="${selectedVal}"]`);
            if (targetTab && !targetTab.classList.contains("active")) {
                targetTab.click();
            }
        });
    }
});
