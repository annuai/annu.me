"use client"
import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import '../../page.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Page = () => {
  // // Use the useEffect hook to cleanup the interval when the component unmounts
  // useEffect(() => {
  //   // import("flowbite/dist/flowbite");
  //   }, []);
  let codeString = '(num) => num + 1';
  codeString = "// Date and time functions using a DS3231 RTC connected via I2C and Wire lib\n#include <Wire.h>\n#include \"RTClib.h\"\n\nRTC_DS3231 rtc;\n\n// Automatic Watering System using NodeMCU, Moisture Sensor\n// constants won't change. They're used here to set pin numbers:\nconst int waterStateButton = 12;     // the number of the waterState Flush switch pin\nconst int ledPin =  LED_BUILTIN;      // the number of the LED pin\nconst int motorPin = 11;\n\n// variables will change:\nint waterState = 0;         // variable for reading the pushbutton status\nint currentHour, initialHour; // Sets the value of current hour\nint moistureSensorValue;\n\nvoid setup() {\n  DateTime now = rtc.now();\n  initialHour = now.hour();\n  pinMode(motorPin, OUTPUT);\n  pinMode(A0, INPUT);\n  Serial.begin(9600);\n\n  if (! rtc.begin()) {\n    Serial.println(\"Couldn't find RTC\");\n    while (1);\n  }\n\n  if (rtc.lostPower()) {\n    Serial.println(\"RTC lost power, lets set the time!\");\n    // following line sets the RTC to the date & time this sketch was compiled\n    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));\n    // This line sets the RTC with an explicit date & time, for example to set\n    // January 21, 2014 at 3am you would call:\n    // rtc.adjust(DateTime(2014, 1, 21, 3, 0, 0));\n  }\n  \n}\n\nvoid loop() {\n  digitalWrite(motorPin,HIGH);\n  DateTime now = rtc.now();\n  Serial.println(now.hour());\n  if(currentHour!=now.hour() || currentHour==initialHour){\n    if(currentHour==initialHour){\n      initialHour--;\n      Serial.println(\"Minus Initial Value of hour\");\n      Serial.println(initialHour);\n    }\n    // Check Moisture\n    Serial.println(\"Moisture\");\n    moistureSensorValue = analogRead(A0);\n    Serial.println(moistureSensorValue);\n    moistureSensorValue = 700;\n    if(moistureSensorValue>600){\n      digitalWrite(motorPin,LOW);\n      delay(10000);\n      digitalWrite(motorPin,HIGH);\n     }\n     \n     // Check Water level\n     Serial.println(waterState);\n     if (waterState == HIGH) {\n      Serial.println(\"No Water! Please fill\");\n     }\n     currentHour = now.hour();;\n   }\n   delay(1000); // 1 Second\n//  delay(36000); // Hour\n}\n"
  return (
  <div>
    <Head>
      <title>Annuai - Augmented Reality Experience for 70+ Indigenous languages</title>
      <meta property="og:title" content="Annuai - Projects" key="title" />
    </Head>
    <Header />

    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 py-8">
    <div className="text-sm">Classroom Project: IoT Systems</div>
    <div className="max-w-md text-xl font-bold font-poppins">Automatic IoT Planter</div>
    </div>
    </div>
    <div className="w-full">
    <div className="max-w-screen-lg mx-auto px-4 pb-6 pt-0">
    <div className="max-w-xs text-md font-poppins">A planter that relays back information on the moisture levels, waters automatically and gives reminders of all things plant-related</div>
    
    <div className="flex mt-8">
  <div className="flex-initial w-44 text-xs font-bold font-poppins ">Execution</div>
  <div className="flex-initial w-64 text-xs font-poppins">Working Prototype with NodeMCU</div>
</div>
<div className="flex">
  <div className="flex-initial w-44 text-xs font-bold font-poppins mt-1">Project Duration</div>
  <div className="flex-initial w-64 text-xs font-poppins mt-1">1 month</div>
</div>
  
  </div>
    </div>


    <div className="max-w-screen-lg mx-auto mt-10">
      <img className="max-w-full h-auto my-10 bg-cyan-100" src="/images/projects/planter/planter-info.png" alt="UI Flow" />
      <div className="max-w-screen-md px-6 mt-6 mb-6">
      <p>
      The orignal code written to test run the system. This doesn't have any IoT
      </p>
      </div>
      <SyntaxHighlighter language="cpp" style={docco} customStyle={{
                    padding: "2rem",
                    fontSize: ".7rem",
                }}>
        {codeString}
      </SyntaxHighlighter>
</div>
<Footer />
  </div>
  );
};

export default Page;