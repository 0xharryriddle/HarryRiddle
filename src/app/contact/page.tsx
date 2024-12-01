import React from "react";

// components
import Title from "@/components/Title";
import ContactDetail from "@/components/contact/ContactDetail";

const Contact = () => {
    return (
        <main className="container mx-auto mt-12">
            <Title content="Contact" />
            <ContactDetail />
        </main>
    );
};

export default Contact;
