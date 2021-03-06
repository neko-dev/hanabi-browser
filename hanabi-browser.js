var HanabiBrowser = {
    ref: {
        colors: ['23AC69', '91C132', 'F19726', 'E8552D', '1AAB8E', 'E1147F', '2980C1', '1BA1E6', '9FA0A0', 'F19726', 'E30B20', 'E30B20', 'A3338B'],
        lineNumber: true
    },
    default: {
        defaultColors : ['23AC69', '91C132', 'F19726', 'E8552D', '1AAB8E', 'E1147F', '2980C1', '1BA1E6', '9FA0A0', 'F19726', 'E30B20', 'E30B20', 'A3338B']
    },
    start: function(selector,line_number) {
            HanabiBrowser.ref.lineNumber = line_number;
            $(selector || 'code').each(function(code,element){
                var ha_code = hanabi($(element).html().replace(new RegExp('&lt;','g'),'<').replace(new RegExp('&gt;','g'),'>'),HanabiBrowser.ref);
                ha_code = ha_code.substring(0,ha_code.length-1).replace(new RegExp('\n','g'),'<br>').replace(new RegExp('  ','g'),'&nbsp&nbsp');
                var lineNumber = 0;
                var lines=[];
                ha_code.split('<br>').forEach(function(codeline){
                    if(HanabiBrowser.ref.lineNumber) {
                        lines.push('<span style="width: 30px; display: inline-block" class="hanabi-linenumber">' + (++lineNumber).toString() + '</span>' + codeline)
                    } else {
                        lines.push('<span style="width: 30px; display: none" class="hanabi-linenumber">' + (++lineNumber).toString() + '</span>' + codeline)
                    }
                });
                ha_code = lines.join('<br>');
                $(element).html(ha_code);
            });
        },
    setLinenumber: function(line_number) {
            HanabiBrowser.ref.lineNumber = line_number;
            if(HanabiBrowser.ref.lineNumber){
                $('.hanabi-linenumber').css('display', 'inline-block');
            }else{
                $('.hanabi-linenumber').css('display', 'none');
            }
        },
    toggleLinenumber: function() {
            HanabiBrowser.ref.lineNumber = !HanabiBrowser.ref.lineNumber;
            HanabiBrowser.setLinenumber(HanabiBrowser.ref.lineNumber);
    },
    putColor: function(color) {
            if(typeof color == 'string'){
                HanabiBrowser.ref.colors.push(color);
            }else{
                HanabiBrowser.ref.colors = HanabiBrowser.ref.colors.concat(color);
            }
        },
    defaultColors: function() {
            HanabiBrowser.ref.colors = HanabiBrowser.default.defaultColors;
        },
    clearColors: function() {
            HanabiBrowser.ref.colors = [];
        }
}