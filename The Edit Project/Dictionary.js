        // Start Number
        var StartNumber = 0;

        // First Page FadeOut
        $(document).ready(function () {
            function isMobile() {
                var UserAgent = navigator.userAgent;
                if (UserAgent.match(/iPhone|iPod|iPad|iPad Pro|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
                    return true;
                } else {
                    return false;
                }
            }
            if (StartNumber == 0) {
                setTimeout(function () {
                    if (isMobile()) {
                        $('.Dic_Main_Page').fadeIn(100);
                    } else {
                        alert("모바일 환경에 최적화 되어 있습니다. 모바일 환경으로 접속해주세요.")
                    }
                }, 500);
                StartNumber++;
                window.scrollTo(0, 0);
            }
        })

        // Move Page To Main Function
        function MovePageToMain() {
            $('#Restart').addClass('icon-spin3-alt animate-spin');
            setTimeout(function () {
                window.location.replace("./The_Edit.html");
            }, 1500);
        }

        // Copy Current URL to Clipboard
        function CopyUrlToClipboard() {
            var Dummy_Tag = document.createElement("input");
            var Current_URL = location.href;
            document.body.appendChild(Dummy_Tag);
            Dummy_Tag.value = Current_URL;
            Dummy_Tag.select();
            document.execCommand("copy");
            document.body.removeChild(Dummy_Tag);
            alert("웹사이트 주소가 복사되었습니다.\nThe website address has been copied.");
        }

        // Page Up Bt Show
        window.onscroll = function () { ScrollBtShow_Hide() };

        function ScrollBtShow_Hide() {
            if (document.body.scroll < 100 || document.documentElement.scroll < 100) {
                $('#Page_Up').css('display', 'none');
            } else {
                $('#Page_Up').css('display', 'block');
            }
        };

        // Page Up Bt Acrtive
        $('#Page_Up').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        })

        $('#Con').click(function () {
            var offset = $('#Con1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Rec').click(function () {
            var offset = $('#Rec1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Boo').click(function () {
            var offset = $('#Boo1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Cre').click(function () {
            var offset = $('#Cre1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Bra').click(function () {
            var offset = $('#Bra1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Rom').click(function () {
            var offset = $('#Rom1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Imm').click(function () {
            var offset = $('#Imm1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Pla').click(function () {
            var offset = $('#Pla1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#Mon').click(function () {
            var offset = $('#Mon1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })

        $('#New').click(function () {
            var offset = $('#New1').offset();
            $('html, body').animate({ scrollTop: offset.top }, 500);
        })