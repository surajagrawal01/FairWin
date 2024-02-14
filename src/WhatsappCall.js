export default function WhatsAppCall(){
    const handleWhatsAppClick = () => {
        const phoneNumber = '9353153423'; // Replace with the actual phone number

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

        // Redirect to the WhatsApp URL
        window.location.href = whatsappUrl;
    };
    return(
        <>
            {handleWhatsAppClick()}
        </>
    )
}