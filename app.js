const figlet = require("figlet");

figlet("FanTomel", function (err, data) {
    if (err) {
        console.log("Something went wrong ...");
        console.dir(err);
        return;
    }
    console.log(data);
})

//Expected output  ↓

// _____  ___ ____  _____
// / _ \ \/ (_)  _ \| ____|
// | | | \  /| | | | |  _|
// | |_| /  \| | |_| | |___
// \___/_/\_\_|____/|_____|


// figlet.text(
//     "OXIDE",
//     {
//       font: "ANSI Shadow",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     },
//     function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       console.log(data);
//     }
//   );

//Expected output  ↓


//  ██████╗ ██╗  ██╗██╗██████╗ ███████╗
// ██╔═══██╗╚██╗██╔╝██║██╔══██╗██╔════╝
// ██║   ██║ ╚███╔╝ ██║██║  ██║█████╗
// ██║   ██║ ██╔██╗ ██║██║  ██║██╔══╝
//  ██████╔╝██╔╝ ██╗██║██████╔╝███████╗
//  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝


figlet.fonts(function (err, fonts) {
  if (err) {
    console.log("something went wrong...");
    console.dir(err);
    return;
  }
  console.dir(fonts);
});
