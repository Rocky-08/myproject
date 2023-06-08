import React from "react";
import { Container, Grid } from "@material-ui/core";
import ContactHeading from "./ContactHeading";
import ContactForm from "./ContactForm";

const Contact = () => {
  //   const [contact, setContact] = useState(false);

  //   let handleContact = () => {
  //     setContact(true);
  //   };
  return (
    <>
      <main style={{ marginBottom: "3rem" }}>
        <Container component="main" maxWidth="md" style={{ marginTop: "3rem" }}>
          <ContactHeading />
          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ marginTop: "2rem" }}
          >
            <Grid item md={6} sm={12}>
              <ContactForm />
            </Grid>
            <Grid item md={6}>
              <img
                src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  marginTop: "1.5rem",
                  marginLeft: "2rem",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Contact;
