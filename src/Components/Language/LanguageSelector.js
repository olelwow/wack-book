import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import i18next from "i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const { value, setValue } = useState("");

  const languages = [
    { value: "sv", text: t("LangSelector.1") },
    { value: "en", text: t("LangSelector.2") },
  ];

  const locales = ["en", "sv"];

  return (
    <Box id="LangContainer" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel sx={{ paddingBottom: "1em" }} id="demo-simple-select-label">
          {t("LangSelector.0")}
        </InputLabel>
        <Select type="submit" value={value}>
          {languages.map((item) => {
            return (
              <MenuItem
                onClick={() => i18next.changeLanguage(item.value)}
                key={item.value}
                value={item.value}
              >
                {item.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector;
