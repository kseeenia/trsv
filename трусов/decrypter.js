const SHIFTS = {
    0 : [5, 4],
    1 : [6, 1],
    2 : [2, 0],
    3 : [10, 7],
    4 : [21, 20],
    5 : [22, 17],
    6 : [18, 16],
    7 : [26, 23],
};
const ALPHABET = {
    'AA' : ' ',
    'BM' : '*',
    'DC' : '1',
    'IK' : 'о',
    'NF' : 'ь',
    'PD' : 'л',
    'EM' : 'е',
    'AN' : 'а',
    'IO' : 'и',
    'HC' : 'р',
    'JA' : 'н',
    'GF' : 'т',
    'CM' : 'с',
    'OP' : '2',
    'CC' : 'ф',
    'ON' : 'к',
    'HI' : 'э',
    'FH' : 'в',
    'HD' : 'м',
    'BE' : 'я',
    'AJ' : '0',
    'AF' : 'з',
    'HH' : 'п',
    'OO' : 'у',
    'HN' : 'Б',
    'EI' : 'й',
    'GN' : '.',
    'JE' : ',',
    'CK' : 'ч',
    'DD' : 'г',
    'CP' : 'ц',
    'PJ' : 'ю',
    'EO' : 'В',
    'KK' : 'б',
    'NO' : 'д',
    'NB' : 'ж',
    'MF' : 'ы',
    'MB' : 'С',
    'KJ' : 'К',
    'PH' : '5',
    'GA' : '3',
    'PB' : 'М',
    'KC' : 'х',
    'DL' : '-',
    'OE' : 'ш',
    'FO' : '9',
    'ED' : 'щ',
    'LA' : 'П',
    'LH' : 'И',
    'LD' : 'Ф',
    'BF' : '6',
    'HF' : 'Н',
};

if (typeof require !== 'undefined' && require.main === module) {
    const text = 'KCIBALHMDDEJMBLOOFINNOGCPCHLHBAONHAKKIFAFGJGLPMAAMAIOIEOOMIPIGBCFMGBAACCJAHAEJOPFOGGKIIMANEIBFABMFCNDPNFHDGCBBLOAKAKHFINACODKDGKNCAIKIHKCFKCKKBHIMEADPEAPBADOFHEHAHAHFACNLHCMIHHHOFCMENKDHIGNNLBAAJJMEJFMHMMCHEMDADIMEAKPEIPPGACAFAHONMEECONLMGJAKAPDPIHNIFCBCHLFMNCMECDMHHGHIOFOAIHNAAAJCJHNCHFAMJCFGEMCMCHHMCNAHJOOIFKGHIBLDPEOAEBNGAALAAHEOKJKFINIHGDBDHJOCDACHHEAAHKFHIGIKHPMMCLPCEMCOCKNEMIOAOOMEAKCACDHADNFMGNNACHAHFCMKLGNHANKIFDFFPHLABMHAFLOIAMGDCLFDEKHAHBMEACHGHPPGCNHOHBMENCMCHMIGDMFEGEOIBOBKILCPMPFAHCEBAJJOKICLDFEAJFBMLAAPAEGBDJDKPCKKIMNNEKOPFLPAOPMEAJPHAPKJDLJAKNJAANFOHKEPJOAOAOAAIFIDAPEFJFKHIPNAFONPNNGCNHAHAHKIFFOCHNALOBNCOCNAHKPHILCCCIFNGADHANEAAJDMPBKKKNAAIKENIMDCFFAKJBCHIAHJJKACKGAIAPKIEHIAHGICBPDKHKCHIFCPMPMKGKMDEIEOPAAJJKEBLMMKCGAJIFCPGOEGLPAEADOIJNIHALFNHENFAOAAGNEHOMAABOAMAMBNECJDHGICPHNOACEBNADCAKIOLHOCONONHDKCDOPPGNACAMOIKAFNJOBCGDNCOCNAHKBJIEPABOFNGLDHAKHEIFJMFKHAHFHFAKCJIMAFKCKMIPAACFDDAJOPDFANJAONAOBEIGIFBLOAIEJPAADFAJNAKFKCIBHHHOOMIHMIEMKHIAFAFOKJNMDAFPHFFNMCGONDOAILBGOMIOAACMOMCBCFENDMHAFGEACIABNADEFCGMNAHOJDIHEIHFMDEHDPPCBPHHANIBMICGOIENCKOLECIBKDIEKIDAIFAEEGMJKKIDHFICHCHKCFPHMBECOONAHMJFJECNEEJBOIBACPAFMBAEENOFDHAOIBICIEBHAEAGAJJDAGHMLCHMNCAIMEKAMFJCHFJDDFHIOIAKIMILFDMCOAINHFAADAAEPHJKDKEDKIKMAJELOJNDCKHHNOINHLAIKDDHDMPAKKEFGFNIBCPNDKDMAJIKNOIOIBBPKKKCAAIKPGIICBDEOONBCHOKDBIKOOLOANJDHFAOKEIPAJEHANAKEBGHICLDHHGFFMGFAJCOBCINBOOKFOGJFGOFFAMBCFLEBOPIAAEDADLGJFACMKCFAAIOBGOLOPIHMMCFDEEFFLGIDBJHEDBLHFPDDCPHDHEKFACCOIACLDDFCMCHFFBJ';
    let blocks = [];
    let a = 32;
    for (let i = 0; i < text.length; i++) {
        if (a === 32) {
            blocks.push(text.slice(i, i + 32));
            a = 0;
        }
        a += 1;
    }

    let result_text = '';
    for (let block of blocks) {
        let new_word = Array(8).fill('_');
        for (let shift in SHIFTS) {
            let check_pair = block[SHIFTS[shift][0]] + block[SHIFTS[shift][1]];
            new_word[shift] = ALPHABET.hasOwnProperty(check_pair) ? ALPHABET[check_pair] : '_';
        }
        result_text += new_word.join('');
    }
    console.log(result_text);

    /*for (var word in ALPHABET) {
        if (!result_text.includes(ALPHABET[word])) {
            console.log(ALPHABET[word]);
        }
    }*/
};

