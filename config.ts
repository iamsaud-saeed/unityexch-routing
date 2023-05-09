  const BASE_URL_API = 'http://130.172.1.125:4040';
  const WEB_SOCKET_API = 'http://130.172.1.244:4034';
  const BASE_URL_v1 = 'http://130.172.1.166:4567';


// const BASE_URL_API = ' ';
// const WEB_SOCKET_API = ' ';
// const BASE_URL_v1 = ' ';



export const CONFIG = {


  userLoginURL: WEB_SOCKET_API + "/api/exchange/casino/userCasinoLogin",
 getUserBalanceURL: WEB_SOCKET_API + "/api/exchange/users/balance/getUserBalance",

 asianCasinoPlacebetURL: WEB_SOCKET_API + "/api/exchange/users/casino/placebet",
 getCasinoEventOdds: WEB_SOCKET_API + "/api/exchange/users/pl/getCasinoPl",
 userGetStackURL: WEB_SOCKET_API +"/api/exchange/users/getUserBetStake",
 getRulesOfMarketURL: WEB_SOCKET_API + '/api/exchange/users/rules/casinoEventRules',

 videoStreamURL: WEB_SOCKET_API + '/api/exchange/users/streaming/casinoEventStreaming',
 casinoMatchedBetList: WEB_SOCKET_API + '/api/exchange/users/betlist/casinoMatchedBetList',
 getCasinoTheme: WEB_SOCKET_API + '/api/exchange/users/casino/casinoThemeConfig',
 casinoLobby: WEB_SOCKET_API + '/api/exchange/users/casino/casinoLobby',
 // getWhatsappNumber : BASE_URL_v1 + '/v1/exchange/users/getParentWhatsAppNo',

 // gghggfgfh

 userAuthURL: BASE_URL_v1 + "/user/login",

 getALLHomeMarketListURL: BASE_URL_v1 + "/front/all_events",
 placeLotteryBetURL: BASE_URL_v1 + '/exchange/user/lottery_placebet',
 getLotteryResultURL: BASE_URL_v1 + '/exchange/user/getlottery_result',
 getAllResultLotteryURL: BASE_URL_v1 + '/front/user/get_lotteryresult',
 getLotteryPlURL: BASE_URL_v1 + '/exchange/user/lottery_pl',

 /* DIAMOND API  START */

 // getCasinoEventOdds: BASE_URL_API +'/api/exchange/users/odds/getCasinoEventOdds',
 verifyTokenURL: BASE_URL_API + '/api/exchange/casino/userCasinoLogin',
 // getUserBalanceURL: BASE_URL_API + "/api/exchange/users/balance/getUserBalance",

 // asianCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/asian/placebet',
 eUCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/european/placebet',
 virtualCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/virtual/placebet',
 // userGetStackURL: BASE_URL_API + "/api/exchange/users/getUserBetStake",
 getDealerListURL: BASE_URL_API + '/api/exchange/users/dealers/getCasinoDealers',
 // videoStreamURL: BASE_URL_API + '/api/exchange/users/streaming/getEventStreaming',
 getCasinoResultURL: BASE_URL_API + '/api/exchange/users/casino/getCasinoMarketResults',
 getResultChartDataURL: BASE_URL_API + '/api/exchange/users/casino/getBaccaratResultGraph',
 getAllMarketplURL: BASE_URL_API + '/api/exchange/users/pl/getCasinoPl',
 logoutUserURL: BASE_URL_API + '/api/exchange/casino/logOutUser',
 // getRulesOfMarketURL: BASE_URL_API + '/api/exchange/users/rules/getSportsRules',
 getSelectionPL: BASE_URL_API + '/api/exchange/users/pl/getSelectionCasinoPl',
 // casinoMatchedBetList: BASE_URL_API+ '/api/exchange/users/betlist/casinoMatchedBetList',

 userUpdateStackValueURL: BASE_URL_API + "/api/exchange/users/updateUserBetStake",

 // getCasinoTheme: BASE_URL_API + "/api/exchange/users/casino/getCasinoThemeConfig",
 /* DIAMOND API  END */




};


export const STACK_VALUE = [
 {
   stakeName: '1000',
   stakeAmount: '1000'
 },
 {
   stakeName: '5000',
   stakeAmount: '5000'
 },
 {
   stakeName: '10000',
   stakeAmount: '10000'
 },
 {
   stakeName: '25000',
   stakeAmount: '25000'
 },
 {
   stakeName: '50000',
   stakeAmount: '50000'
 },
 {
   stakeName: '100000',
   stakeAmount: '100000'
 },
 {
   stakeName: '200000',
   stakeAmount: '200000'
 },
 {
   stakeName: '500000',
   stakeAmount: '500000'
 },
];