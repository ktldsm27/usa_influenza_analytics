jQuery(document).ready(function () {
    var infoDiv = jQuery('<div id="infoDiv"></div>');
    infoDiv.css({
        position: 'fixed',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '1px',
        zIndex: '1000',
        display: 'none'
    });

    jQuery('body').append(infoDiv);

    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        onRegionClick: function (element, code, region) {
            var message;
    
            switch (region) {
                case 'Region 1 (Maine)':

                    message = '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;
    
                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
    
                    break;
    
                case 'Region 1 (New Hampshire)':

                    message = '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case 'Region 1(Rhode Island)':

                    message= '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 1(Massachusetts)':

                    message= '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 1 (Vermont)':

                    message= '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 1 (Connecticut)':

                    message= '<b>Region 1</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg1_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg1_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg1_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region1.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 2 (New York)':

                    message= '<b>Region 2</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg2_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg2_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg2_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region2.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 2 (New Jersey)':

                    message= '<b>Region 2</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg2_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg2_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg2_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region2.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 3 (Delaware)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 3 (Maryland)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 3 (Pennsylvania)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 3 (Virginia)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 3 (West Virginia)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 3 (Washington)':

                    message= '<b>Region 3</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg3_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg3_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg3_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/region3.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Alabama)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Florida)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Georgia)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Kentucky)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Mississippi)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (North Carolina)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (South Carolina)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 4 (Tennessee)':

                    message= '<b>Region 4</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg4_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg4_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg4_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG4.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 5 (Illinois)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 5 (Indiana)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 5 (Michigan)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 5 (Minnesota)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 5 (Ohio)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 5 (Wisconsin)':

                    message= '<b>Region 5</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg5_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg5_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg5_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG5.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 6 (Arkansas)':

                    message= '<b>Region 6</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg6_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg6_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg6_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG6.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 6 (Louisiana)':

                    message= '<b>Region 6</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg6_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg6_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg6_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG6.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 6 (New Mexico)':

                    message= '<b>Region 6</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg6_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg6_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg6_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG6.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 6 (Oklahoma)':

                    message= '<b>Region 6</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg6_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg6_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg6_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG6.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 6 (Texas)':

                    message= '<b>Region 6</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg6_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg6_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg6_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG6.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 7 (Iowa)':

                    message= '<b>Region 7</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg7_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg7_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg7_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG7.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 7 (Kansas)':

                    message= '<b>Region 7</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg7_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg7_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg7_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG7.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;
                
                case'Region 7 (Missouri)':

                    message= '<b>Region 7</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg7_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg7_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg7_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG7.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 7 (Nebraska)':

                    message= '<b>Region 7</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg7_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg7_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg7_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG7.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (Colorado)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (Montana)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (North Dakota)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (South Dakota)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (Utah)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 8 (Wyoming)':

                    message= '<b>Region 8</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg8_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg8_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg8_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG8.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 9 (Arizona)':

                    message= '<b>Region 9</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg9_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg9_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg9_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG9.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 9 (California)':

                    message= '<b>Region 9</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg9_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg9_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg9_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG9.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 9 (Hawaii)':

                    message= '<b>Region 9</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg9_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg9_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg9_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG9.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 9 (Nevada)':

                    message= '<b>Region 9</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg9_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg9_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg9_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG9.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 9 (Arizona)':

                    message= '<b>Region 9</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg9_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg9_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg9_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG9.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 10 (Alaska)':

                    message= '<b>Region 10</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg10_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg10_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg10_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG10.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 10 (Alaska)':

                    message= '<b>Region 10</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg10_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg10_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg10_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG10.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 10 (Idaho)':

                    message= '<b>Region 10</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg10_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg10_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg10_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG10.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 10 (Oregon)':

                    message= '<b>Region 10</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg10_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg10_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg10_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG10.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                case'Region 10 (Washington)':

                    message= '<b>Region 10</b>' + '<br>' + '<b>Total Influenza-like illness Cases: </b>' + reg10_TOTALili + '<br>' + '<b>Sites Reporting: </b>' +  reg10_TOTALsit + '<br>' + '<b>Total Patient Visits: </b>' + reg10_TOTALPAT;

                    var imageElement = $('<img>').attr('src', '../images/RG10.png').addClass('region-image');
    
                    infoDiv.html('').append(imageElement);
                    break;

                default:
                    break;
            }
            if (message) {
                infoDiv.append('<p>' + message + '</p>');
                infoDiv.fadeIn();
    
                setTimeout(function () {
                    infoDiv.fadeOut();
                }, 5000);
            }
        }
    });    
});