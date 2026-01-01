// import { Instagram, Linkedin, MapPin, Phone, Twitch, Twitter } from "lucide-react"
// import {cn} form "@/lib/utils"

// export const ContactSection =() =>{
//     const handleSubmit = (e) =>{
//           e.preventDefault()
//           setTimeout(() =>
                   
//     },1500)
//    return <section  className="py-24 px-4 relative bg-secondary/30">
//           <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                 Get In <span className="text-primary">
//                  Touch
//                 </span>
//                     <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
//                         Have  a project in mind or want ot collaborate ? Feel free to reach out.
//                         <div
//                         className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                         <div className="flex items-start space-x-4">
//                             <div className="p-3 rounded-full bg-primary/10">
//                             <Mail className="h-6 w-6 text-primary "/>{" "}

//                             </div>
//                             <div>
//                                 <h4>
//                                     Email
//                                 </h4>
//                                 <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" >
//                                     kar893216@gmail.com
//                                 </a>
//                             </div>
                        
//                         </div>
//                          <div className="flex items-start space-x-4">
//                             <div className="p-3 rounded-full bg-primary/10">
//                             <Mail className="h-6 w-6 text-primary "/>{" "}

//                             </div>
//                             <div>
//                                 <h4>
//                                     Phone
//                                 </h4>
//                                 <a href="tel:+919635242578" className="text-muted-foreground hover:text-primary transition-colors" >
//                                     +91-9635242578
//                                 </a>
//                             </div>
                        
//                         </div>
//                          <div className="flex items-start space-x-4">
//                             <div className="p-3 rounded-full bg-primary/10">
//                             <MapPin className="h-6 w-6 text-primary "/>{" "}

//                             </div>
//                             <div>
//                                 <h4>
//                                     Location
//                                 </h4>
//                                 <a /*href="mailto:hello@gmail.com" */className="text-muted-foreground hover:text-primary transition-colors" >
//                                     Kolkata,West Bengal
//                                 </a>
//                             </div>
                        
//                         </div>
//                         </div>



//                     </p>

//                 </h2>

//                 <div className="div">
//                     <h4> Connect with Me </h4>
//                     <div className="flex space-x-4  justify-center">
//                         <a href="#" target="_blank"> 
//                             <Linkedin/>
//                         </a>

//                          <a href="#" target="_blank"> 
//                             <Twitter/>
//                         </a>
//                          <a href="#" target="_blank"> 
//                             <Instagram/>
//                         </a>
//                          <a href="#" target="_blank"> 
//                             <Twitch/>
//                         </a>


//                     </div>

//                 </div>








//           </div>




//          <div className="bg-card  p-8 rounded-lg shadow-xs" >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
//             <form>
//                 <div>
//                     <label htmlFor="name" className="block text-sm font-medium mb-2 "></label>
//                     <input
//                      type="text"
//                      id="name"
//                      name="name"
//                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
//                      placeholder="sowmajit Kar ......."
                    
                    
                    
                    
                    
//                     />

//                 </div>


//             </form>



//          </div>

//                          <div className="bg-card  p-8 rounded-lg shadow-xs" >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
//             <form>
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium mb-2 "></label>
//                     <input
//                      type="text"
//                      id="email"
//                      name="email"
//                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
//                      placeholder="Kar893216@gmailmessage"
                    
                    
                    
                    
                    
//                     />

//                 </div>


//             </form>



//          </div>

//                          <div className="bg-card  p-8 rounded-lg shadow-xs" >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
//             <form>
//                 <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2 "></label>
//                     <textarea
//                      type="text"
//                      id="message"
//                      name="message"
//                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
//                      placeholder="Hello There >>>❤️"
                    
                    
                    
                    
                    
//                     />

//                 </div>


//             </form>
//                     <button  type ="submit" className="cn("cosmic-button w-full flex items-center justify-center gap-2")">

//                     </button>


//          </div>




//    </section>




// }



import { Instagram, Linkedin, MapPin, Phone, Twitch, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils"; // Fixed "form" typo to "from"

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // Logic goes here (e.g., success toast)
      console.log("Form submitted");
    }, 1500); // Fixed bracket nesting for setTimeout
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        {/* Changed outer p tag to a div because it contains other block elements */}
        <div className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info & Socials */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:kar893216@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    kar893216@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a href="tel:+919635242578" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-9635242578
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Kolkata, West Bengal</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold mb-4 text-center md:text-left">Connect with Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" target="_blank" className="hover:text-primary transition-colors"><Linkedin /></a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors"><Twitter /></a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors"><Instagram /></a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors"><Twitch /></a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Sowmajit Kar"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Kar893216@gmail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Hello There... ❤️"
                  required
                ></textarea>
              </div>

              {/* <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2 mt-4")}>
                Send Message
              </button> */}
              
<button 
  type="submit" 
  onClick={handleSubmit}
  className={cn(
    "cosmic-button w-full", 
    "mt-4" // Minor change: moved spacing into cn
  )}
>
  Send Message
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};