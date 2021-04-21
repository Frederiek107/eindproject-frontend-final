import React, {useContext, useState} from 'react';
import './Loginpage.css';
import {useForm} from "react-hook-form";
import {LocationContext} from "../../components/context/LocationContextProvider";
import CountryMenu from "../../components/CountryMenu/CountryMenu";

function Loginpage() {
    const {register, handleSubmit} = useForm();
    const [value, setValue] = useState('');
    const {location, setLocation} = useContext(LocationContext);

    function onSubmit(data) {
        console.log(data);
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
    }

    function postLocation() {
        setLocation(value);
        console.log(`AANGEKLIKT: ${value}`);
        console.log(`INGESTELDE LOCATIE: ${location}`);
    }

    return (

        <div id="page">
            <div id="login">
                <h1>Log in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">
                        Email:
                        <input id="username" type="input" name="username" {...register("username")}/>
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input id="password" type="input" name="password" {...register("password")}/>
                    </label>
                    <label>Choose your location:</label>
                    <select id="location" name="location" value={value} onChange={handleChange}>
                        <option value="21">Argentina</option>
                        <option value="23">Australia</option>
                        <option value="26">Belgium</option>
                        <option value="29">Brazil</option>
                        <option value="33">Canada</option>
                        <option value="34">Switzerland</option>
                        <option value="39">Germany</option>
                        <option value="45">France</option>
                        <option value="46">United Kingdom</option>
                        <option value="65">Mexico</option>
                        <option value="67">Netherlands</option>
                        <option value="73">Sweden</option>
                        <option value="78">United States</option>
                        <option value="265">Iceland</option>
                        <option value="267">Japan</option>
                        <option value="268">Portugal</option>
                        <option value="269">Italy</option>
                        <option value="270">Spain</option>
                        <option value="307">Czech Republic</option>
                        <option value="327">Greece</option>
                        <option value="331">Hong Kong</option>
                        <option value="334">Hungary</option>
                        <option value="336">Israel</option>
                        <option value="337">India</option>
                        <option value="348">South Korea</option>
                        <option value="357">Lithuania</option>
                        <option value="392">Poland</option>
                        <option value="400">Romania</option>
                        <option value="402">Russia</option>
                        <option value="408">Singapore</option>
                        <option value="412">Slovakia</option>
                        <option value="425">Thailand</option>
                        <option value="432">Turkey</option>
                        <option value="447">South Africa</option>
                    </select>
                    <button onClick={postLocation}>Submit</button>
                </form>
            </div>
            <div id="signup">
                No account? Sign up here!
            </div>
        </div>
    )
}

export default Loginpage;