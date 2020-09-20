import React from 'react';
import axios from 'axios';
// import { Formik, Form, FastField, ErrorMessage } from 'formik';
// import Recaptcha from 'react-google-recaptcha';
// import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

export default () => {
    return (
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <Input
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Nom*"
            required
          /><br/><br/>
          <Input
            id="email"
            aria-label="email"
            component="input"
            type="email"
            name="email"
            placeholder="Email*"
            required
          /><br/><br/>
          <Input
            as="textarea"
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            style={{resize: "none"}}
            required
          /><br/><br/>
          <Center>
            <Button secondary type="submit" id="submit">
              Envoyer
            </Button>
          </Center>
        </form>
    );
};
