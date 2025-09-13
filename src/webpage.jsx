import React from "react";
import image1 from "./assests/image1.jpg"
import image3 from "./assests/image3.jpg"

    import "./web.css"



function Web() {
    return(
        <React.Fragment>

        <h1 style={{textAlign:"center",fontSize:"60px",color:"red",fontFamily:"cursive"}}>ORGANIC HERB TEA</h1>

        <img src="https://watermark.lovepik.com/photo/40027/1588.jpg_wh1200.jpg" alt="" style={{margin:"20px", width:"1300px", height:"600px"}} />

        <h2 style={{textAlign:"left",fontSize:"40px",color:"green",fontFamily:"cursive",marginLeft:"8rem"}}>GREEN TEA</h2>

        <img className="herbal-tea" src=" https://www.news-medical.net/image-handler/picture/2021/9/shutterstock_251566309.jpg" alt="" />
        
        <p className="para1">Green tea offers a wide array of health benefits due to its rich antioxidant content, particularly catechins like EGCG. These compounds contribute to improved brain function, heart health, and may even play a role in cancer prevention. Additionally, green tea may aid in weight management, boost immunity, and enhance oral health. The combination of caffeine and L-theanine in green tea can enhance cognitive function, improve alertness, and boost focus without the jitters associated with other caffeinated beverages. 

        </p>

        <h2 style={{textAlign:"left",fontSize:"40px",color:"rgb(238, 99, 7)",fontFamily:"cursive",marginLeft:"8rem"}}>COLD TEA</h2>

        <img src={image1} alt="" className="first" />

        <p className="para2">Cold tea, particularly iced tea, can be a refreshing and healthy beverage choice. It offers various benefits, including hydration, antioxidant intake, and potential weight management support. It can also be a lower-sugar alternative to many other cold drinksWeight Management: Iced tea, particularly green tea, may help with weight management by potentially boosting metabolism and reducing cravings. </p>

        <h2 style={{textAlign:"left",fontSize:"40px",color:"black",fontFamily:"cursive",marginLeft:"8rem"}}>BLACK TEA</h2>

        <img src={image3} alt="" className="third" />

        <p className="para3">Cold tea, particularly iced tea, can be a refreshing and healthy beverage choice. It offers various benefits, including hydration, antioxidant intake, and potential weight management support. It can also be a lower-sugar alternative to many other cold drinksWeight Management: Iced tea, particularly green tea, may help with weight management by potentially boosting metabolism and reducing cravings. </p>

        
  </React.Fragment>

)
    
}

export default Web;
