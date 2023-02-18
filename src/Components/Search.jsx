import {
  Autocomplete,
  Button,
  FormControl,
  Slider,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./search.css";
import { useInfoContext } from "../context/InfoContext";

const Search = () => {
  const [value, setValue] = useState(null);
  const [bedroomNumber, setBedroomNumber] = useState("");
  const [valueRange, setValueRange] = useState([500, 5000]);
  const [location, setLocation] = useState("");
  const { info, setInfo } = useInfoContext();
  const [searchInfo, setSearchInfo] = useState(info);
  const options = info.map((e) => e.city);
  const type = info.map((e) => e.bedrooms.toString());

  const canClick =
    Boolean(value) &&
    Boolean(bedroomNumber) &&
    Boolean(valueRange) &&
    Boolean(location);
  const handleReset = () => {
    
    setValue(null);
    setBedroomNumber("");
    setLocation("");
    setValueRange([500, 5000]);
    setInfo(searchInfo);
  };
  const handleSearch = () => {
    let requiredRooms = searchInfo.filter((e) => {
      if (
        e.city === location &&
        +bedroomNumber === +e.bedrooms &&
        valueRange[0] <= e.price <= valueRange[1]
      ) {
        return e;
      }
    });
    console.log(requiredRooms, location, value, bedroomNumber);
    setInfo(requiredRooms);
  };
  return (
    <div className="search">
      <h1>Search Your Favourite Property</h1>
      <div className="content">
        <div className="location">
          
          <FormControl sx={{ width: 250 }}>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={(e) => setLocation(e.target.value)}
            >
              {[...new Set(options)].map((e) => (
                <MenuItem value={e} key={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <label htmlFor="location">Enter Location</label>
        </div>
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              minDate={new Date()}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <label htmlFor="date">Enter date</label>
        </div>
        <div className="price">
          <Slider
            getAriaLabel={() => "Price range"}
            value={valueRange}
            onChange={(e) => setValueRange(e.target.value)}
            valueLabelDisplay="auto"
            step={250}
            min={500}
            max={5000}
          />
          <label className="priceLable">Enter price</label>
        </div>
        <div className="type">
         
          <FormControl sx={{ width: 250 }}>
            <InputLabel id="demo-simple-select-label-bed">Bedrooms</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-bed"
              value={bedroomNumber}
              label="Bedroom"
              onChange={(e) => setBedroomNumber(e.target.value)}
            >
              {[...new Set(type)].map((e) => (
                <MenuItem value={e} key={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <label htmlFor="location">Enter Bedrooms Required</label>
        </div>
      </div>
      <div className="Search_buttons">
        <Button
          variant="contained"
          color="success"
          onClick={handleSearch}
          disabled={!canClick}
        >
          Search
        </Button>
        <Button variant="contained" color="error" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Search;
