var express = require('express');
var router = express.Router();
var file_poeti = require('../poeti.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(file_poeti);
  //res.render('index', { title: 'Express' });
});

router.get('/search/:email', function(req, res, next) {
    
    let poeta_trovato = file_poeti.poeti.find(poeta => poeta.email == req.params.email);
    console.log(poeta_trovato);
  
  //res.render('index', { title: 'Express' });
});

module.exports = router;

/*
                    _,,......_
                 ,-'          `'--.
              ,-'  _              '-.
     (`.    ,'   ,  `-.              `.
      \ \  -    / )    \               \
       `\`-^^^, )/      |     /         :
         )^ ^ ^V/            /          '.
         |      )            |           `.
         9   9 /,--,\    |._:`         .._`.
         |    /   /  `.  \    `.      (   `.`.
         |   / \  \    \  \     `--\   )    `.`.___
-hrr-   .;;./  '   )   '   )       ///'       `-"'
        `--'   7//\    ///\

            =/\                 /\=
    / \'._   (\_/)   _.'/ \       (_                   _)
   / .''._'--(o.o)--'_.''. \       /\                 /\
  /.' _/ |`'=/ " \='`| \_ `.\     / \'._   (\_/)   _.'/ \
 /` .' `\;-,'\___/',-;/` '. '\   /_.''._'--('.')--'_.''._\
/.-' jgs   `\(-V-)/`       `-.\  | \_ / `;=/ " \=;` \ _/ |
             "   "               \/  `\__|`\___/`|__/`  \/
                                  `       \(/|\)/       `

                                                    -.                       .-
              _..-'(                       )`-.._
           ./'. '||\\.      _ _ /| ACK!  .//||` .`\.
        ./'.|'.'||||\\|..   \'o.O' /  ..|//||||`.`|.`\.
     ./'..|'.|| |||||\``````=(___)=''''''/||||| ||.`|..`\.
   ./'.||'.|||| ||||||||||||.  U  .|||||||||||| ||||.`||.`\.
  /'|||'.|||||| |||||||||||||     ||||||||||||| ||||||.`|||`\
 '.|||'.||||||| |||||||||||||     ||||||||||||| |||||||.`|||.`
'.||| ||||||||| |/'   ``\||``     ''||/''   `\| ||||||||| |||.`
|/' \./'     `\./         \!|\   /|!/         \./'     `\./ `\|
V    V         V          }' `\ /' `{          V         V    V
`    `         `               V               '         '    '

                   YAao,
                    Y8888b,
                  ,oA8888888b,
            ,aaad8888888888888888bo,
         ,d888888888888888888888888888b,
       ,888888888888888888888888888888888b,
      d8888888888888888888888888888888888888,
     d888888888888888888888888888888888888888b
    d888888P'                    `Y888888888888,
    88888P'                    Ybaaaa8888888888l
   a8888'                      `Y8888P' `V888888
 d8888888a                                `Y8888
AY/'' `\Y8b                                 ``Y8b
Y'      `YP                                    ~~

O_
				       /  >
				      -  >   ^\
				     /   >  ^ /   
				    (O)  > ^ /   / / /  
       _____                        |            \\|//
      /  __ \                      _/      /     / _/
     /  /  | |                    /       /     / /
   _/  |___/ /			_/      ------_/ / 
 ==_|  \____/    	      _/       /  ______/
     \   \                 __/           |\
      |   \_          ____/              / \      _                    
       \    \________/                  |\  \----/_V
        \_                              / \_______ V
          \__                /       \ /          V
             \               \        \
              \______         \_       \
                     \__________\_      \ 
                        /    /    \_    | 
                       |   _/       \   |
                      /  _/          \  |
                     |  /            |  |
                     \  \__          |   \__
                     /\____=\       /\_____=\
*/