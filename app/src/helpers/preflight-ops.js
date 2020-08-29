import { useContext } from "react";
import { StorePreferencesContext } from "../contexts";

const SetStorePreferences = () => {
    const { setCountryPreference }  = useContext(StorePreferencesContext);
    setCountryPreference("GBP");
}

const Preflight = {
    SetStorePreferences
};

export default Preflight;