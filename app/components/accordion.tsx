import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";

export default function AccordionIndicator() {
  return (
    <>
      <center className="faq_title">
        <Typography level="h2" sx={{ mt: 0 }}>
          Password generator FAQs
        </Typography>
        <Typography level="body-lg">
          Questions about this random password generator? Answers below!
        </Typography>
      </center>
      <AccordionGroup
        className="accordion"
        variant="soft"
        size="lg"
        sx={{
          p: 1,
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: "0.2s",
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: "rotate(45deg)",
          },
        }}
      >
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Password Strength Requirements
          </AccordionSummary>
          <AccordionDetails>
            Our generator creates passwords with minimum 12 characters,
            combining uppercase, lowercase, numbers, and special symbols.
            Password strength is calculated in real-time using zxcvbn algorithm.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Customization Options
          </AccordionSummary>
          <AccordionDetails>
            Choose password length (8-64 characters), include/exclude specific
            character types, add phonetic pronunciation, or create memorable
            passphrases with word combinations.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Security Measures
          </AccordionSummary>
          <AccordionDetails>
            Passwords are generated locally in your browser, never stored or
            transmitted. We use cryptographically secure random number
            generation and regular security audits.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Password Saving & Management
          </AccordionSummary>
          <AccordionDetails>
            Integrated secure vault with AES-256 encryption. Optional cloud sync
            with end-to-end encryption. Auto-fill capabilities for recognized
            websites.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Password Generation Algorithms
          </AccordionSummary>
          <AccordionDetails>
            Uses PBKDF2 with SHA-256 for derivation, supporting multiple
            generation modes: random, pronounceable, pattern-based, and legacy
            system compatibility.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Best Practices Implementation
          </AccordionSummary>
          <AccordionDetails>
            Automatic checks against Have I Been Pwned database, password
            expiration reminders, and duplicate password detection across your
            accounts.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Cross-Platform Compatibility
          </AccordionSummary>
          <AccordionDetails>
            Web version, desktop apps (Windows/Mac/Linux), and mobile apps
            (iOS/Android) with seamless synchronization. Browser extensions for
            Chrome, Firefox, and Edge.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Advanced Features
          </AccordionSummary>
          <AccordionDetails>
            Bulk password generation, password sharing with expiration dates,
            emergency access setup, and hidden vault for decoy passwords.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Password Health Reports
          </AccordionSummary>
          <AccordionDetails>
            Weekly security reports showing weak/reused passwords, exposure
            status, and improvement recommendations. Historical tracking of
            password changes.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Offline Access
          </AccordionSummary>
          <AccordionDetails>
            Full functionality available without internet connection. Local
            encryption with optional cloud backup. Automatic sync when
            connection is restored.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </>
  );
}
