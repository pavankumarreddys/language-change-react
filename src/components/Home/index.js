import React from 'react';
import { useLanguage } from '../../LanguageContext'
import './index.css'


const Home = () => {
  const { selectedLanguage} = useLanguage()
  const contentByLanguage = {
    english: {
      description: 'AI content generation is a technology that uses artificial intelligence algorithms to create written or visual content automatically. It has various applications in marketing, content creation, and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur lorem eu lorem cursus, id bibendum libero iaculis. Integer ac augue id ipsum convallis iaculis. Morbi ut leo vel justo lacinia condimentum. Donec vehicula erat nec risus cursus bibendum. Nullam tristique urna vel justo dignissim feugiat. Nullam varius euismod justo, a lacinia ligula fringilla in. Nunc sed ligula in dolor posuere euismod. Fusce id bibendum risus. Sed nec lectus vitae sapien dapibus vehicula.'
    },
    telugu: {
      description: 'AI కంటెంట్ జనరేషన్ ఒక తంత్రజ్ఞాన ఆల్గోరితమ్‌లను ఉపయోగించి స్వయంచాలకంగా రచించడంను అర్థపడిస్తుంది. ఇది మార్కెటింగ్‌లో, కంటెంట్ రచనలో మరియు మరిన్ని అనేక అనుభవాలు ఉన్నాయి. లోరెమ్ ఇప్సమ్ డోలర్ సిట్ ఆమె, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్, లోరెమ్ ఇప్సమ్ డోలర్ సిట్ అమెట్. మానవులందరికీ గురించి చిన్న లోరెమ్ ఇప్సమ్ డోలర్ సిట్ మూడ్ రొట్టెల ఉద్దేశాలు.'
    },
    hindi: {
      description: 'एआई सामग्री उत्पन्नन एक प्रौद्योगिकी है जिसमें कृत्रिम बुद्धिमत्ता एल्गोरिथ्म का उपयोग स्वच्छंद रूप से लिखित या दृश्य सामग्री बनाने के लिए किया जाता है। इसके मार्केटिंग, सामग्री निर्माण और अन्य कई अनुप्रयोग हैं।. लोरेम इप्सम डोलर सिट अमेट, कॉन्सेक्टेटर अडिपिस्किंग एलिट. प्रॉइन एफ्फिक्टुर लोरेम एऊ इउ लोरेम कुर्सुस, इद बिबेंडुम लिबेरो इएऊलिस. इंटेगर अक अऊगुए इड इप्सुम कॉनवल्लिस इएऊलिस. मॉर्बि उत लेओ वेल वेल जुस्टो लाकिनिया कॉन्डिमेंटुम. डोनेक वेहिकुला एरत नेक रिसुस कुर्सुस बिबेंडुम. नुल्लाम त्रिस्तिक्यूर्स उर्ना वेल जुस्तो डिग्निस्सिम फेऊगिएट. नुल्लाम वरियुस एऊइस्मोद जुस्तो, अ लाकिनिया लिगुला फ्रिन्गिल्ला इन. नुन्क सेड लिगुला इन डोलर पोसुएरे एऊइस्मोद. फुस्क इड बिबेंडुम रिसुस. सेद नेक लेक्टुस वितए सपिएन डपिबुस वेहिकुला.'
    }
  };

  
  return (
    <div className="language-selector">
      <div className="sample-content">
        <p>{contentByLanguage[selectedLanguage]?.description}</p>
      </div>
    </div>
  );
};

export default Home;


