"use client";
import React, { useState, useEffect, JSX } from "react";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Slider from "@mui/joy/Slider";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import Accordion from "./components/accordion";
interface ErrorState {
  [key: string]: string;
}

export default function App(): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [errors, setErrors] = useState<ErrorState | string>({});

  const generatePassword = (): void => {
    setErrors({});
    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("sdfsfsd");
    } else if (passwordLength === 0) {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === null || passwordLength === undefined) {
      return setErrors("Invalid password length");
    } else if (passwordLength >= 33) {
      setPassword("");
      return setErrors("Password length cannot exceed 30 characters");
    }

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        newPassword += randomLower();
      } else if (uppercase && choice === 1) {
        newPassword += randomUpper();
      } else if (symbols && choice === 2) {
        newPassword += randomSymbol();
      } else if (numbers && choice === 3) {
        newPassword += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(newPassword);
  };

  const random = (min = 0, max = 1): number => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = (): string => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = (): string => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = (): string => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
  <>
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet color="neutral" variant="soft" 
      sx={{borderRadius:10,boxShadow:3, p:4}}>
    
      <div>
        <Input
          size="md"
          value={password}
          endDecorator={
            <Button
              variant="soft"
              size="sm"
              onClick={() => navigator.clipboard.writeText(password)}
            >
              Copy
            </Button>
          }
          sx={{
            "--Input-radius": `16px`,
            "--Input-decoratorChildHeight": `28px`,
          }}
        />

        <Slider
          onClick={generatePassword}
          color="primary"
          marks={false}
          orientation="horizontal"
          size="lg"
          valueLabelDisplay="on"
          variant="solid"
          defaultValue={passwordLength}
          max={32}
          onChange={(event: Event, newValue: number | number[]) =>
            setPasswordLength(newValue as number)
          }
          sx={{ mt: 5 }}
        />

        <Typography
          id="sandwich-group"
          level="body-sm"
          sx={{ fontWeight: "lg", mb: 1 }}
        >
          Options
        </Typography>
        <div role="group" aria-labelledby="sandwich-group">
          <List size="sm">
            <ListItem>
              <Checkbox
                size="lg"
                label="Include Uppercase Letters"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUppercase(e.target.checked)
                }
                onClick={generatePassword}
                defaultChecked
              />
            </ListItem>
            <ListItem>
              <Checkbox
                size="lg"
                label="Include Lowercase Letters"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLowercase(e.target.checked)
                }
                onClick={generatePassword}
                defaultChecked
              />
            </ListItem>
            <ListItem>
              <Checkbox
                size="lg"
                label="Include Numbers"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumbers(e.target.checked)
                }
                onClick={generatePassword}
                defaultChecked
              />
            </ListItem>
            <ListItem>
              <Checkbox
                size="lg"
                label="Include Symbols"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSymbols(e.target.checked)
                }
                onClick={generatePassword}
                defaultChecked
              />
            </ListItem>
          </List>
        </div>
        <Button onClick={generatePassword} size="lg" fullWidth>
          Generate
        </Button>
      </div>
      </Sheet>
    </Stack>
    <Accordion/>
    </>
  );
}
