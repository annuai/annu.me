// Date and time functions using a DS3231 RTC connected via I2C and Wire lib
#include <Wire.h>
#include "RTClib.h"

RTC_DS3231 rtc;

// Automatic Watering System using NodeMCU, Moisture Sensor
// constants won't change. They're used here to set pin numbers:
const int waterStateButton = 12;     // the number of the waterState Flush switch pin
const int ledPin =  LED_BUILTIN;      // the number of the LED pin
const int motorPin = 11;

// variables will change:
int waterState = 0;         // variable for reading the pushbutton status
int currentHour, initialHour; // Sets the value of current hour
int moistureSensorValue;

void setup() {
  DateTime now = rtc.now();
  initialHour = now.hour();
  pinMode(motorPin, OUTPUT);
  pinMode(A0, INPUT);
  Serial.begin(9600);

  if (! rtc.begin()) {
    Serial.println("Couldn't find RTC");
    while (1);
  }

  if (rtc.lostPower()) {
    Serial.println("RTC lost power, lets set the time!");
    // following line sets the RTC to the date & time this sketch was compiled
    rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));
    // This line sets the RTC with an explicit date & time, for example to set
    // January 21, 2014 at 3am you would call:
    // rtc.adjust(DateTime(2014, 1, 21, 3, 0, 0));
  }
  
}

void loop() {
  digitalWrite(motorPin,HIGH);
  DateTime now = rtc.now();
  Serial.println(now.hour());
  if(currentHour!=now.hour() || currentHour==initialHour){
    if(currentHour==initialHour){
      initialHour--;
      Serial.println("Minus Initial Value of hour");
      Serial.println(initialHour);
    }
    // Check Moisture
    Serial.println("Moisture");
    moistureSensorValue = analogRead(A0);
    Serial.println(moistureSensorValue);
    moistureSensorValue = 700;
    if(moistureSensorValue>600){
      digitalWrite(motorPin,LOW);
      delay(10000);
      digitalWrite(motorPin,HIGH);
     }
     
     // Check Water level
     Serial.println(waterState);
     if (waterState == HIGH) {
      Serial.println("No Water! Please fill");
     }
     currentHour = now.hour();;
   }
   delay(1000); // 1 Second
//  delay(36000); // Hour
}
