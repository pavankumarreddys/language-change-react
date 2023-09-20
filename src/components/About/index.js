import React from 'react';
import { useLanguage } from '../../LanguageContext'
import './index.css'

const About = () => {
  const { selectedLanguage} = useLanguage()
  const contentByLanguage = {
    english: {
      description: "Hello! I'm Pavan Kumar Reddy Sannala, a frontend developer with a passion for crafting delightful web experiences. With expertise in HTML5, CSS3, JavaScript and react js, I specialize in building responsive and interactive user interfaces. I'm proficient in React.js, allowing me to create dynamic and feature-rich web applications. My toolkit also includes Python for scripting and SQL for database operations. I'm skilled in Bootstrap and Flexbox, ensuring clean and efficient design. As a frontend enthusiast, I'm dedicated to continuous learning and staying updated with the latest industry trends. Let's connect and explore exciting opportunities in the world of frontend development."
    },
    telugu: {
      description: 
      "హలో! నా పేరు పవన్ కుమార్ రెడ్డి సన్నాల మరియు సంతాన అభివృద్ధికి ఒక ప్రేమ ఉంది. HTML5, CSS3, JavaScript మరియు React.js నుండి కూడి, నేను స్పష్టమైన మరియు పరిక్రియాశీల యూజర్ ఇంటర్ఫేసులను నిర్మించడానికి నా ఆద్యతన అనుభవం ఉంది. నేను React.js లో నప్పటికీ నిపుణిగా ఉంటాను, ఇది గతిశీల మరియు లక్షణాన్విత వెబ్ అనుప్రయోగాలను రూపంచేయడానికి నాకు అనుమతిస్తుంది. నా ఉపకరణాల వద్ద Python కోసం స్క్రిప్టింగ్ మరియు డేటాబేస్ ఆపరేషన్ల కోసం SQL కూడా ఉంది. నేను బూట్స్ట్రాప్ మరియు ఫ్లెక్స్బాక్స్ లో నిపుణిగా ఉన్నాను, ఇది శుభ్రమైన మరియు కౌశల్యంగా డిజైన్ చేయడానికి నిశ్చయపడుతుంది. ఫ్రంటెండ్ ఆకర్షణకర్త గాని, నాకు నిరంతర అభ్యసనం చేయడం మరియు కొత్త ఇండస్ట్రీ ప్రవృత్తులను అప్డేట్ చేయడం కోసం ప్రతిబద్ధను. వికెట్స్ యొక్క రాకలలో సందర్శించండి మరియు ఫ్రంటెండ్ డెవలప్మెంట్ ప్రపంచంలో ఆనందకరమైన అవకాశాలను అన్వేషించుకోండానికి వచ్చండి"
    },
    hindi: {
      description: "नमस्ते! मैं पवन कुमार रेड्डी सन्नाला हूँ, एक फ्रंटएंड डेवलपर जिसे वेब अनुभवों को सुखद बनाने का शौक है। HTML5, CSS3, जावास्क्रिप्ट और रिएक्ट जेएस के ज्ञान के साथ, मैं उत्तरदायिता से प्रतिसादी और इंटरैक्टिव यूजर इंटरफेस बनाने में विशेषज्ञ हूँ। मैं रिएक्ट.जेएस का प्रोफेशनल हूँ, जिससे मुझे डायनेमिक और फीचर-रिच वेब एप्लिकेशन बनाने में सहायक होता है। मेरी टूलकिट में स्क्रिप्टिंग के लिए पायथन और डेटाबेस प्रक्रियाओं के लिए SQL भी शामिल है। मैं बूटस्ट्रैप्ट और फ्लेक्सबॉक्स में कुशल हूँ, जिससे साफ और कुशल डिज़ाइन सुनिश्चित होता है। फ्रंटएंड के प्रेमिक के रूप में, मैं निरंतर सीखने और नवीनतम उद्योग के ट्रेंड्स से अपडेट रहने के लिए प्रतिबद्ध हूँ। चलिए जुड़ें और फ्रंटएंड डेवलपमेंट की दुनिया में रोमांचक मौकों की खोज करें मुझे नई तकनीकों के अन्वेषण करना और काम और टीम में अपनी सर्वोत्तम योगदान देना पसंद है। यदि मैं चीजें पूरा नहीं कर पाया, तो मैं संगतता में विश्वास करता हूँ। अपने वेब विकास के अलावा, मुझे नई लोगों के साथ बात करना और उनसे सीखने का भी शौक है"
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

export default About;