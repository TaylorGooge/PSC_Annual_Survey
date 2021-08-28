function add_row(body){
  
    var row = body.insertRow(-1)

    var cell1 = row.insertCell(0)
    var text1 = document.createTextNode("")
    cell1.contentEditable= 'true'
    cell1.appendChild(text1)

    var cell2 = row.insertCell(1)
    var text2 = document.createTextNode("")
    cell2.contentEditable =  "true"
    cell2.appendChild(text2)

    var cell3 = row.insertCell(2)
    var text3 = document.createTextNode("")
    cell3.contentEditable = "true"
    cell3.setAttribute('max-width',"30px")
    cell3.appendChild(text3)

    var cell4 = row.insertCell(3)
    var bt = document.createElement("Button")
    var bt_text = document.createTextNode("Remove")
    bt.appendChild(bt_text)
    bt.classList.add('btn', 'btn-danger', 'btn-rounded', 'btn-sm', 'my-0')
    bt.setAttribute("onclick","remove_this(this)")
  
    cell4.appendChild(bt)

    
}
function isValidEmail(email){
    
    
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let val = res.test(String(email).toLowerCase());
    
    if (val == true){
        return true;
    }
    else {
        alert("Please enter a valid e-mail");
    } 

}

function isValidPhone(phonenum){

    var comp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var val = comp.test(phonenum);
    
    if ((val == false) || (typeof val == "object")) {
        alert("Please enter a valid phone number");
    }
  
    return;
}

function isValidZip(zip){

    var validZips = [32003,32004,32006,32007,32008,32009,32011,32013,32024,
        32025,32026,32030,32033,32034,32035,32038,32040,32041,32042,32043,32044,32046,32050,32052,32053,32054,
        32055,32056,32058,32059,32060,32061,32062,32063,32064,32065,32066,32067,32068,
        32071,32072,32073,32079,32080,32081,32082,32083,32084,32085,32086,32087,32091,32092,32094,32095,32096,32097,
        32099,32102,32105,32110,32111,32112,32113,32114,32115,32116,32117,32118,32119,32120,32121,32122,32123,32124,
        32125,32126,32127,32128,32129,32130,32131,32132,32133,32134,32135,32136,32137,32138,32139,32140,32141,32142,
        32143,32145,32147,32148,32149,32157,32158,32159,32160,32162,32163,32164,32168,32169,32170,32173,32174,32175,
        32176,32177,32178,32179,32180,32181,32182,32183,32185,32187,32189,32190,32192,32193,32195,32198,32201,32202,
        32203,32204,32205,32206,32207,32208,32209,32210,32211,32212,32214,32215,32216,32217,32218,32219,32220,32221,
        32222,32223,32224,32225,32226,32227,32228,32229,32230,32231,32232,32233,32234,32235,32236,32237,32238,32239,
        32240,32241,32244,32245,32246,32247,32250,32254,32255,32256,32257,32258,32259,32260,32266,32267,32277,32290,
        32301,32302,32303,32304,32305,32306,32307,32308,32309,32310,32311,32312,32313,32314,32315,32316,32317,32318,
        32320,32321,32322,32323,32324,32326,32327,32328,32329,32330,32331,32332,32333,32334,32335,32336,32337,32340,
        32341,32343,32344,32345,32346,32347,32348,32350,32351,32352,32353,32355,32356,32357,32358,32359,32360,32361,
        32362,32395,32399,32401,32402,32403,32404,32405,32406,32407,32408,32409,32410,32411,32412,32413,32417,32420,
        32421,32422,32423,32424,32425,32426,32427,32428,32430,32431,32432,32433,32434,32435,32437,32438,32439,32440,
        32442,32443,32444,32445,32446,32447,32448,32449,32452,32454,32455,32456,32457,32459,32460,32461,32462,32463,
        32464,32465,32466,32501,32502,32503,32504,32505,32506,32507,32508,32509,32511,32512,32513,32514,32516,32520,
        32521,32522,32523,32524,32526,32530,32531,32533,32534,32535,32536,32537,32538,32539,32540,32541,32542,32544,
        32547,32548,32549,32550,32559,32560,32561,32562,32563,32564,32565,32566,32567,32568,32569,32570,32571,32572
        ,32577,32578,32579,32580,32583,32588,32590,32591,32592,32601,32602,32603,32604,32605,32606,32607,32608,32609,
        32610,32611,32612,32613,32614,32615,32616,32617,32618,32619,32621,32622,32625,32626,32627,32628,32631,32633,
        32634,32635,32639,32640,32641,32643,32644,32648,32653,32654,32655,32656,32658,32662,32663,32664,32666,32667,
        32668,32669,32680,32681,32683,32686,32692,32693,32694,32696,32697,32701,32702,32703,32704,32706,32707,32708,
        32709,32710,32712,32713,32714,32715,32716,32718,32719,32720,32721,32722,32723,32724,32725,32726,32727,32728,
        32730,32732,32733,32735,32736,32738,32739,32744,32745,32746,32747,32750,32751,32752,32753,32754,32756,32757,
        32759,32762,32763,32764,32765,32766,32767,32768,32771,32772,32773,32774,32775,32776,32777,32778,32779,32780,
        32781,32782,32783,32784,32789,32790,32791,32792,32793,32794,32795,32796,32798,32799,32801,32802,32803,32804,
        32805,32806,32807,32808,32809,32810,32811,32812,32814,32815,32816,32817,32818,32819,32820,32821,32822,32824,
        32825,32826,32827,32828,32829,32830,32831,32832,32833,32834,32835,32836,32837,32839,32853,32854,32855,32856,
        32857,32858,32859,32860,32861,32862,32867,32868,32869,32872,32877,32878,32885,32886,32887,32890,32891,32893,
        32896,32897,32898,32899,32901,32902,32903,32904,32905,32906,32907,32908,32909,32910,32911,32912,32919,32920,
        32922,32923,32924,32925,32926,32927,32931,32932,32934,32935,32936,32937,32940,32941,32948,32949,32950,32951,
        32952,32953,32954,32955,32956,32957,32958,32959,32960,32961,32962,32963,32964,32965,32966,32967,32968,32969,
        32970,32971,32976,32978,33001,33002,33004,33008,33009,33010,33011,33012,33013,33014,33015,33016,33017,33018,
        33019,33020,33021,33022,33023,33024,33025,33026,33027,33028,33029,33030,33031,33032,33033,33034,33035,33036,
        33037,33039,33040,33041,33042,33043,33045,33050,33051,33052,33054,33055,33056,33060,33061,33062,33063,33064,
        33065,33066,33067,33068,33069,33070,33071,33072,33073,33074,33075,33076,33077,33081,33082,33083,33084,33090,
        33092,33093,33097,33101,33102,33106,33107,33109,33110,33111,33112,33114,33116,33119,33121,33122,33124,33125,
        33126,33127,33128,33129,33130,33131,33132,33133,33134,33135,33136,33137,33138,33139,33140,33141,33142,33143,
        33144,33145,33146,33147,33148,33149,33150,33151,33152,33153,33154,33155,33156,33157,33158,33159,33160,33161,
        33162,33163,33164,33165,33166,33167,33168,33169,33170,33172,33173,33174,33175,33176,33177,33178,33179,33180,
        33181,33182,33183,33184,33185,33186,33187,33188,33189,33190,33191,33192,33193,33194,33195,33196,33197,33198,
        33199,33206,33222,33231,33233,33234,33238,33239,33242,33243,33245,33247,33255,33256,33257,33261,33265,33266,
        33269,33280,33283,33296,33299,33301,33302,33303,33304,33305,33306,33307,33308,33309,33310,33311,33312,33313,
        33314,33315,33316,33317,33318,33319,33320,33321,33322,33323,33324,33325,33326,33327,33328,33329,33330,33331,
        33332,33334,33335,33336,33337,33338,33339,33340,33345,33346,33348,33349,33351,33355,33359,33388,33394,33401,
        33402,33403,33404,33405,33406,33407,33408,33409,33410,33411,33412,33413,33414,33415,33416,33417,33418,33419,
        33420,33421,33422,33424,33425,33426,33427,33428,33429,33430,33431,33432,33433,33434,33435,33436,33437,33438,
        33439,33440,33441,33442,33443,33444,33445,33446,33447,33448,33449,33454,33455,33458,33459,33460,33461,33462,
        33463,33464,33465,33466,33467,33468,33469,33470,33471,33472,33473,33474,33475,33476,33477,33478,33480,33481,
        33482,33483,33484,33486,33487,33488,33493,33496,33497,33498,33499,33503,33508,33509,33510,33511,33513,33514,
        33521,33523,33524,33525,33526,33527,33530,33534,33537,33538,33539,33540,33541,33542,33543,33544,33545,33547,
        33548,33549,33550,33556,33558,33559,33563,33564,33565,33566,33567,33568,33569,33570,33571,33572,33573,33574,
        33575,33576,33578,33579,33583,33584,33585,33586,33587,33592,33593,33594,33595,33596,33597,33598,33601,33602,
        33603,33604,33605,33606,33607,33608,33609,33610,33611,33612,33613,33614,33615,33616,33617,33618,33619,33620,
        33621,33622,33623,33624,33625,33626,33629,33630,33631,33633,33634,33635,33637,33646,33647,33650,33651,33655,
        33660,33661,33662,33663,33664,33672,33673,33674,33675,33677,33679,33680,33681,33682,33684,33685,33686,33687,
        33688,33689,33690,33694,33701,33702,33703,33704,33705,33706,33707,33708,33709,33710,33711,33712,33713,33714,
        33715,33716,33729,33730,33731,33732,33733,33734,33736,33737,33738,33740,33741,33742,33743,33744,33747,33755,
        33756,33757,33758,33759,33760,33761,33762,33763,33764,33765,33766,33767,33769,33770,33771,33772,33773,33774,
        33775,33776,33777,33778,33779,33780,33781,33782,33784,33785,33786,33801,33802,33803,33804,33805,33806,33807,
        33809,33810,33811,33812,33813,33815,33820,33823,33825,33826,33827,33830,33831,33834,33835,33836,33837,33838,
        33839,33840,33841,33843,33844,33845,33846,33847,33848,33849,33850,33851,33852,33853,33854,33855,33856,33857,
        33858,33859,33860,33862,33863,33865,33867,33868,33870,33871,33872,33873,33875,33876,33877,33880,33881,33882,
        33883,33884,33885,33888,33890,33896,33897,33898,33900,33901,33902,33903,33904,33905,33906,33907,33908,33909,
        33910,33911,33912,33913,33914,33915,33916,33917,33918,33919,33920,33921,33922,33924,33927,33928,33929,33930,
        33931,33932,33935,33936,33938,33944,33945,33946,33947,33948,33949,33950,33951,33952,33953,33954,33955,33956,
        33957,33960,33965,33966,33967,33970,33971,33972,33973,33974,33975,33976,33980,33981,33982,33983,33990,33991,
        33993,33994,34101,34102,34103,34104,34105,34106,34107,34108,34109,34110,34112,34113,34114,34116,34117,34119,
        34120,34133,34134,34135,34136,34137,34138,34139,34140,34141,34142,34143,34145,34146,34201,34202,34203,34204,
        34205,34206,34207,34208,34209,34210,34211,34212,34215,34216,34217,34218,34219,34220,34221,34222,34223,34224,
        34228,34229,34230,34231,34232,34233,34234,34235,34236,34237,34238,34239,34240,34241,34242,34243,34249,34250,
        34251,34260,34264,34265,34266,34267,34268,34269,34270,34272,34274,34275,34276,34277,34278,34280,34281,34282,
        34284,34285,34286,34287,34288,34289,34290,34291,34292,34293,34295,34420,34421,34423,34428,34429,34430,34431,
        34432,34433,34434,34436,34441,34442,34445,34446,34447,34448,34449,34450,34451,34452,34453,34460,34461,34464,
        34465,34470,34471,34472,34473,34474,34475,34476,34477,34478,34479,34480,34481,34482,34483,34484,34487,34488,
        34489,34491,34492,34498,34601,34602,34603,34604,34605,34606,34607,34608,34609,34610,34611,34613,34614,34636,
        34637,34638,34639,34652,34653,34654,34655,34656,34660,34661,34667,34668,34669,34673,34674,34677,34679,34680,
        34681,34682,34683,34684,34685,34688,34689,34690,34691,34692,34695,34697,34698,34705,34711,34712,34713,34714,
        34715,34729,34731,34734,34736,34737,34739,34740,34741,34742,34743,34744,34745,34746,34747,34748,34749,34753,
        34755,34756,34758,34759,34760,34761,34762,34769,34770,34771,34772,34773,34777,34778,34785,34786,34787,34788,
        34789,34797,34945,34946,34947,34948,34949,34950,34951,34952,34953,34954,34956,34957,34958,34972,34973,34974,
        34979,34981,34982,34983,34984,34985,34986,34987,34988,34990,34991,34992,34994,34995,34996,34997];

        var strToInt = parseInt(zip,10);
    
        if (validZips.indexOf(strToInt) == -1){
            alert("Please enter a valid zip code");
        }
        else{
            return;
      }
}

function checkTransfer(){

    // if both boxes are unchecked everything is required    
    if ((document.getElementById("transferyes").checked == false) && (document.getElementById("transferno").checked == false)){
       addDesignee()
       addCoc()
     
    }
    if ((document.getElementById("transferyes").checked == true)&& (document.getElementById("transferno").checked == true)) {
        addCoc()
        addDesignee()
    }
    // transfers accepted- fields required
    if (document.getElementById("transferyes").checked == true){
        addDesignee()
        addCoc()

    }
    // remove requirements
    if (document.getElementById("transferno").checked == true){
       removeDesignee()
       removeCoc()
       document.getElementById("transfercriteria").required = false;
       document.getElementById("transfercriteria").disabled = true;
    }
}

function removeDesignee(){    
    document.getElementById("designeename").required= false;
    document.getElementById("designeename").disabled = true;

    document.getElementById("designeeaddress").required = false;
    document.getElementById("designeeaddress").disabled = true;

    document.getElementById("designeecity").required = false;
    document.getElementById("designeecity").disabled = true;

    document.getElementById("designeezip").required = false;
    document.getElementById("designeezip").disabled = true;

    document.getElementById("designeephone").required = false;
    document.getElementById("designeephone").disabled = true;

    document.getElementById("designeeemail").required = false;
    document.getElementById("designeeemail").disabled = true;
        
    }


function removeCoc(){

    document.getElementById("cocname").required = false;
    document.getElementById("cocname").disabled = true;

    document.getElementById("cocaddress").required = false;
    document.getElementById("cocaddress").disabled = true;

    document.getElementById("coccity").required = false;
    document.getElementById("coccity").disabled = true;

    document.getElementById("coczip").required= false;
    document.getElementById("coczip").disabled= true;

    document.getElementById("cocphone").required = false;
    document.getElementById("cocphone").disabled = true;

    document.getElementById("cocemail").required = false;
    document.getElementById("cocemail").disabled = true;

    }

function addCoc(){
    document.getElementById("cocname").required = true;
    document.getElementById("cocname").disabled = false;

    document.getElementById("cocaddress").required = true;
    document.getElementById("cocaddress").disabled = false;

    document.getElementById("coccity").required = true;
    document.getElementById("coccity").disabled = false;

    document.getElementById("coczip").required= true;
    document.getElementById("coczip").disabled= false;

    document.getElementById("cocphone").required = true;
    document.getElementById("cocphone").disabled = false;

    document.getElementById("cocemail").required = true;
    document.getElementById("cocemail").disabled = false;

}

function checkDesignee(){
    if (document.getElementById("designeena").checked == true){
        removeDesignee()
    }
    else{
        addDesignee()
    }
}

function checkCoc(){
    if (document.getElementById("cocna").checked == true){
        removeCoc()
    }
    else{
        addCoc()
    }
}

function addDesignee(){
    document.getElementById("designeename").required= true;
    document.getElementById("designeename").disabled = false;

    document.getElementById("designeeaddress").required = true;
    document.getElementById("designeeaddress").disabled = false;

    document.getElementById("designeecity").required = true;
    document.getElementById("designeecity").disabled = false;

    document.getElementById("designeezip").required = true;
    document.getElementById("designeezip").disabled = false;

    document.getElementById("designeephone").required = true;
    document.getElementById("designeephone").disabled = false;

    document.getElementById("designeeemail").required = true;
    document.getElementById("designeeemail").disabled = false;

    document.getElementById("cocname").required = true;
    document.getElementById("cocname").disabled = false;

    document.getElementById("cocaddress").required = true;
    document.getElementById("cocaddress").disabled = false;

    document.getElementById("coccity").required = true;
    document.getElementById("coccity").disabled = false;

    document.getElementById("coczip").required= true;
    document.getElementById("coczip").disabled= false;

    document.getElementById("cocphone").required = true;
    document.getElementById("cocphone").disabled = false;

    document.getElementById("cocemail").required = true;
    document.getElementById("cocemail").disabled = false;

    document.getElementById("transfercriteria").required = true;
    document.getElementById("transfercriteria").disabled = false;

}
function otherCourtType(value){

    if (value == "None of these"){
        document.getElementById("othertype").required = true;
    }
    else{
         document.getElementById("othertype").required = false;
     }   
}
function loqReqCheck(){
    document.getElementById("chargemisd").required = false;
    document.getElementById("chargefel").required = false;
    document.getElementById("chargena").required = false;

}

function caseProcCheck(){
    document.getElementById("cppretrial").required = false;
    document.getElementById("cppreplea").required = false;
    document.getElementById("cppostplea").required = false;
    document.getElementById("cppreadj").required = false;
    document.getElementById("cppostadj").required = false;
    document.getElementById("cpna").required = false;
}

function validator(){


    // checkbox checkers
    // level of charge
    if ((chargemisd.checked ==false) && (chargefel.checked == false) && (chargena.checked == false)){
        alert("Please indicate the level of charges your court accepts");
        return false;
            }

    //case processing
    if ((cppretrial.checked == false) && (cppreplea.checked == false) && (cppostplea.checked== false) && (cppreadj.checked == false) && (cppostadj.checked == false) && (cpna.checked == false)){
         alert("Please indicate how your court processes cases")
         return false;
     }

    
    //comparators
    //phone
    var comp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // emails
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //zipcode
    var validZips = [32003,32004,32006,32007,32008,32009,32011,32013,32024,
        32025,32026,32030,32033,32034,32035,32038,32040,32041,32042,32043,32044,32046,32050,32052,32053,32054,
        32055,32056,32058,32059,32060,32061,32062,32063,32064,32065,32066,32067,32068,
        32071,32072,32073,32079,32080,32081,32082,32083,32084,32085,32086,32087,32091,32092,32094,32095,32096,32097,
        32099,32102,32105,32110,32111,32112,32113,32114,32115,32116,32117,32118,32119,32120,32121,32122,32123,32124,
        32125,32126,32127,32128,32129,32130,32131,32132,32133,32134,32135,32136,32137,32138,32139,32140,32141,32142,
        32143,32145,32147,32148,32149,32157,32158,32159,32160,32162,32163,32164,32168,32169,32170,32173,32174,32175,
        32176,32177,32178,32179,32180,32181,32182,32183,32185,32187,32189,32190,32192,32193,32195,32198,32201,32202,
        32203,32204,32205,32206,32207,32208,32209,32210,32211,32212,32214,32215,32216,32217,32218,32219,32220,32221,
        32222,32223,32224,32225,32226,32227,32228,32229,32230,32231,32232,32233,32234,32235,32236,32237,32238,32239,
        32240,32241,32244,32245,32246,32247,32250,32254,32255,32256,32257,32258,32259,32260,32266,32267,32277,32290,
        32301,32302,32303,32304,32305,32306,32307,32308,32309,32310,32311,32312,32313,32314,32315,32316,32317,32318,
        32320,32321,32322,32323,32324,32326,32327,32328,32329,32330,32331,32332,32333,32334,32335,32336,32337,32340,
        32341,32343,32344,32345,32346,32347,32348,32350,32351,32352,32353,32355,32356,32357,32358,32359,32360,32361,
        32362,32395,32399,32401,32402,32403,32404,32405,32406,32407,32408,32409,32410,32411,32412,32413,32417,32420,
        32421,32422,32423,32424,32425,32426,32427,32428,32430,32431,32432,32433,32434,32435,32437,32438,32439,32440,
        32442,32443,32444,32445,32446,32447,32448,32449,32452,32454,32455,32456,32457,32459,32460,32461,32462,32463,
        32464,32465,32466,32501,32502,32503,32504,32505,32506,32507,32508,32509,32511,32512,32513,32514,32516,32520,
        32521,32522,32523,32524,32526,32530,32531,32533,32534,32535,32536,32537,32538,32539,32540,32541,32542,32544,
        32547,32548,32549,32550,32559,32560,32561,32562,32563,32564,32565,32566,32567,32568,32569,32570,32571,32572
        ,32577,32578,32579,32580,32583,32588,32590,32591,32592,32601,32602,32603,32604,32605,32606,32607,32608,32609,
        32610,32611,32612,32613,32614,32615,32616,32617,32618,32619,32621,32622,32625,32626,32627,32628,32631,32633,
        32634,32635,32639,32640,32641,32643,32644,32648,32653,32654,32655,32656,32658,32662,32663,32664,32666,32667,
        32668,32669,32680,32681,32683,32686,32692,32693,32694,32696,32697,32701,32702,32703,32704,32706,32707,32708,
        32709,32710,32712,32713,32714,32715,32716,32718,32719,32720,32721,32722,32723,32724,32725,32726,32727,32728,
        32730,32732,32733,32735,32736,32738,32739,32744,32745,32746,32747,32750,32751,32752,32753,32754,32756,32757,
        32759,32762,32763,32764,32765,32766,32767,32768,32771,32772,32773,32774,32775,32776,32777,32778,32779,32780,
        32781,32782,32783,32784,32789,32790,32791,32792,32793,32794,32795,32796,32798,32799,32801,32802,32803,32804,
        32805,32806,32807,32808,32809,32810,32811,32812,32814,32815,32816,32817,32818,32819,32820,32821,32822,32824,
        32825,32826,32827,32828,32829,32830,32831,32832,32833,32834,32835,32836,32837,32839,32853,32854,32855,32856,
        32857,32858,32859,32860,32861,32862,32867,32868,32869,32872,32877,32878,32885,32886,32887,32890,32891,32893,
        32896,32897,32898,32899,32901,32902,32903,32904,32905,32906,32907,32908,32909,32910,32911,32912,32919,32920,
        32922,32923,32924,32925,32926,32927,32931,32932,32934,32935,32936,32937,32940,32941,32948,32949,32950,32951,
        32952,32953,32954,32955,32956,32957,32958,32959,32960,32961,32962,32963,32964,32965,32966,32967,32968,32969,
        32970,32971,32976,32978,33001,33002,33004,33008,33009,33010,33011,33012,33013,33014,33015,33016,33017,33018,
        33019,33020,33021,33022,33023,33024,33025,33026,33027,33028,33029,33030,33031,33032,33033,33034,33035,33036,
        33037,33039,33040,33041,33042,33043,33045,33050,33051,33052,33054,33055,33056,33060,33061,33062,33063,33064,
        33065,33066,33067,33068,33069,33070,33071,33072,33073,33074,33075,33076,33077,33081,33082,33083,33084,33090,
        33092,33093,33097,33101,33102,33106,33107,33109,33110,33111,33112,33114,33116,33119,33121,33122,33124,33125,
        33126,33127,33128,33129,33130,33131,33132,33133,33134,33135,33136,33137,33138,33139,33140,33141,33142,33143,
        33144,33145,33146,33147,33148,33149,33150,33151,33152,33153,33154,33155,33156,33157,33158,33159,33160,33161,
        33162,33163,33164,33165,33166,33167,33168,33169,33170,33172,33173,33174,33175,33176,33177,33178,33179,33180,
        33181,33182,33183,33184,33185,33186,33187,33188,33189,33190,33191,33192,33193,33194,33195,33196,33197,33198,
        33199,33206,33222,33231,33233,33234,33238,33239,33242,33243,33245,33247,33255,33256,33257,33261,33265,33266,
        33269,33280,33283,33296,33299,33301,33302,33303,33304,33305,33306,33307,33308,33309,33310,33311,33312,33313,
        33314,33315,33316,33317,33318,33319,33320,33321,33322,33323,33324,33325,33326,33327,33328,33329,33330,33331,
        33332,33334,33335,33336,33337,33338,33339,33340,33345,33346,33348,33349,33351,33355,33359,33388,33394,33401,
        33402,33403,33404,33405,33406,33407,33408,33409,33410,33411,33412,33413,33414,33415,33416,33417,33418,33419,
        33420,33421,33422,33424,33425,33426,33427,33428,33429,33430,33431,33432,33433,33434,33435,33436,33437,33438,
        33439,33440,33441,33442,33443,33444,33445,33446,33447,33448,33449,33454,33455,33458,33459,33460,33461,33462,
        33463,33464,33465,33466,33467,33468,33469,33470,33471,33472,33473,33474,33475,33476,33477,33478,33480,33481,
        33482,33483,33484,33486,33487,33488,33493,33496,33497,33498,33499,33503,33508,33509,33510,33511,33513,33514,
        33521,33523,33524,33525,33526,33527,33530,33534,33537,33538,33539,33540,33541,33542,33543,33544,33545,33547,
        33548,33549,33550,33556,33558,33559,33563,33564,33565,33566,33567,33568,33569,33570,33571,33572,33573,33574,
        33575,33576,33578,33579,33583,33584,33585,33586,33587,33592,33593,33594,33595,33596,33597,33598,33601,33602,
        33603,33604,33605,33606,33607,33608,33609,33610,33611,33612,33613,33614,33615,33616,33617,33618,33619,33620,
        33621,33622,33623,33624,33625,33626,33629,33630,33631,33633,33634,33635,33637,33646,33647,33650,33651,33655,
        33660,33661,33662,33663,33664,33672,33673,33674,33675,33677,33679,33680,33681,33682,33684,33685,33686,33687,
        33688,33689,33690,33694,33701,33702,33703,33704,33705,33706,33707,33708,33709,33710,33711,33712,33713,33714,
        33715,33716,33729,33730,33731,33732,33733,33734,33736,33737,33738,33740,33741,33742,33743,33744,33747,33755,
        33756,33757,33758,33759,33760,33761,33762,33763,33764,33765,33766,33767,33769,33770,33771,33772,33773,33774,
        33775,33776,33777,33778,33779,33780,33781,33782,33784,33785,33786,33801,33802,33803,33804,33805,33806,33807,
        33809,33810,33811,33812,33813,33815,33820,33823,33825,33826,33827,33830,33831,33834,33835,33836,33837,33838,
        33839,33840,33841,33843,33844,33845,33846,33847,33848,33849,33850,33851,33852,33853,33854,33855,33856,33857,
        33858,33859,33860,33862,33863,33865,33867,33868,33870,33871,33872,33873,33875,33876,33877,33880,33881,33882,
        33883,33884,33885,33888,33890,33896,33897,33898,33900,33901,33902,33903,33904,33905,33906,33907,33908,33909,
        33910,33911,33912,33913,33914,33915,33916,33917,33918,33919,33920,33921,33922,33924,33927,33928,33929,33930,
        33931,33932,33935,33936,33938,33944,33945,33946,33947,33948,33949,33950,33951,33952,33953,33954,33955,33956,
        33957,33960,33965,33966,33967,33970,33971,33972,33973,33974,33975,33976,33980,33981,33982,33983,33990,33991,
        33993,33994,34101,34102,34103,34104,34105,34106,34107,34108,34109,34110,34112,34113,34114,34116,34117,34119,
        34120,34133,34134,34135,34136,34137,34138,34139,34140,34141,34142,34143,34145,34146,34201,34202,34203,34204,
        34205,34206,34207,34208,34209,34210,34211,34212,34215,34216,34217,34218,34219,34220,34221,34222,34223,34224,
        34228,34229,34230,34231,34232,34233,34234,34235,34236,34237,34238,34239,34240,34241,34242,34243,34249,34250,
        34251,34260,34264,34265,34266,34267,34268,34269,34270,34272,34274,34275,34276,34277,34278,34280,34281,34282,
        34284,34285,34286,34287,34288,34289,34290,34291,34292,34293,34295,34420,34421,34423,34428,34429,34430,34431,
        34432,34433,34434,34436,34441,34442,34445,34446,34447,34448,34449,34450,34451,34452,34453,34460,34461,34464,
        34465,34470,34471,34472,34473,34474,34475,34476,34477,34478,34479,34480,34481,34482,34483,34484,34487,34488,
        34489,34491,34492,34498,34601,34602,34603,34604,34605,34606,34607,34608,34609,34610,34611,34613,34614,34636,
        34637,34638,34639,34652,34653,34654,34655,34656,34660,34661,34667,34668,34669,34673,34674,34677,34679,34680,
        34681,34682,34683,34684,34685,34688,34689,34690,34691,34692,34695,34697,34698,34705,34711,34712,34713,34714,
        34715,34729,34731,34734,34736,34737,34739,34740,34741,34742,34743,34744,34745,34746,34747,34748,34749,34753,
        34755,34756,34758,34759,34760,34761,34762,34769,34770,34771,34772,34773,34777,34778,34785,34786,34787,34788,
        34789,34797,34945,34946,34947,34948,34949,34950,34951,34952,34953,34954,34956,34957,34958,34972,34973,34974,
        34979,34981,34982,34983,34984,34985,34986,34987,34988,34990,34991,34992,34994,34995,34996,34997];

    // primary contact checkers
    //primary contact phone
    var primPhone = document.getElementById("primaryphone").value
    var primPhoneCheck = comp.test(primPhone)
    if ((primPhoneCheck == false) || (typeof primPhoneCheck == "object")){
        alert("The primary contact phone number is not valid.");
        return false;
    }

    // //primary contact zipcode
    var primZip = document.getElementById("primzip").value;
    var strToInt = parseInt(primZip,10);
    var zipTest = validZips.indexOf(strToInt);
    if (zipTest == -1){
        alert("Please provide a valid primary contact zip code");
        return false;
    }


    // //primary contact email
    var primEmail = document.getElementById("primaryemail").value;
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let primEmailCheck = res.test(String(primEmail).toLowerCase());
    if (primEmailCheck != true ){
        alert("The primary contact email address is not valid.");
        return false;
    }

    // judge contact checkers
    //judge contact phone
    var judgePhone = document.getElementById("judgephone").value;
    var judgePhoneCheck = comp.test(judgePhone);
    if ((judgePhoneCheck == false) || (typeof judgePhoneCheck == "object")){
        alert("The judge phone number is not valid.");
        return false;
    }

    // judge contact zipcode
    var judgeZip = document.getElementById("judgezip").value;
    var strToInt = parseInt(judgeZip,10);
    var zipTest = validZips.indexOf(strToInt);
    if (zipTest == -1){
        alert("Please provide a valid judge zip code");
        return false;
    }
    // judge email
    var judgeEmail = document.getElementById("judgeemail").value;
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let judgeEmailCheck = res.test(String(judgeEmail).toLowerCase());
    if (judgeEmailCheck != true ){
        alert("The judge email address is not valid.");
        return false;
    }
}

function remove_this(line){
    row = line.closest("tr")
    parent = row.parentNode
    parent.removeChild(row)
}
    




