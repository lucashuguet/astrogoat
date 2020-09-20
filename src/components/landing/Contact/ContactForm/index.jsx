import React from 'react';
import { Button, Input } from 'components/common';
import { Center, InputField } from './styles';

export default () => (
    <form name="contact" netlify>
      <Input
        id="name"
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Nom*"
        required
      /><br/>
      <Input
        id="email"
        aria-label="email"
        component="input"
        type="email"
        name="email"
        placeholder="Email*"
        required
      /><br/>
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
      /><br/>
      <Center>
        <Button secondary type="submit">
          Envoyer
        </Button>
      </Center>
    </form>
);
