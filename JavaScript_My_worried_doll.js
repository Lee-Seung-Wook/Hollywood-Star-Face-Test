// Move Page To Main Function
function MovePageToMain() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll.html");
    }, 1000);
}

// Move Page To Other Characters Function
function MovePageToOtherCharacters() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_OtherCharacters.html");
    }, 1000);
}

// Move Page To Result 1 Function
function MovePageToResult1() {
    setTimeout(function () {
        window.location.replace("./My_worried_doll_Result_1.html");
    }, 1000);
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

var CurrentPage = 0;
var number = 0;
var StartNumber = 0;

var array = []
array[0] = {
    "Second_Question1": "뉴스나 신문에 실업과 관련된 내용이 나오면 가슴이 답답해지나요?", "BtBt1": "1_1_1", "BtBt2": "1_1_1", "BtBt3": "1_1_1", "BtBt4": "1_1_1", "BtBt5": "1_1_1",
    "Second_Question2": "주변에 취업을 한 선배를 보며 나도 저렇게 할 수 있을까? 라는 불안감을 느끼나요?", "BtBt1_2": "1_1_2", "BtBt2_2": "1_1_2", "BtBt3_2": "1_1_2", "BtBt4_2": "1_1_2", "BtBt5_2": "1_1_2",
    "Second_Question3": "평소에 취업 관련 정보 사이트를 자주 찾아보는 편인가요?", "BtBt1_3": "1_1_3", "BtBt2_3": "1_1_3", "BtBt3_3": "1_1_3", "BtBt4_3": "1_1_3", "BtBt5_3": "1_1_3",
    "Second_Question4": "“쉴 수 있을 때 쉬어”라는 직장인 친구의 말이 나도 모르게 아니꼽게 들리나요?", "BtBt1_4": "1_1_4", "BtBt2_4": "1_1_4", "BtBt3_4": "1_1_4", "BtBt4_4": "1_1_4", "BtBt5_4": "1_1_4",
    "Second_Question5": "신입은 경력을 쌓을 곳이 없다는 말에 공감하나요?", "BtBt1_5": "1_1_5", "BtBt2_5": "1_1_5", "BtBt3_5": "1_1_5", "BtBt4_5": "1_1_5", "BtBt5_5": "1_1_5"
},
    array[1] = {
        "Second_Question1": "내가 원하는 직무에 대한 준비를 잘하고 있다고 생각하나요?", "BtBt1": "1_2_1", "BtBt2": "1_2_1", "BtBt3": "1_2_1", "BtBt4": "1_2_1", "BtBt5": "1_2_1",
        "Second_Question2": "내가 평생 즐겁게 할 수 있을 것 같은 일을 찾았나요?", "BtBt1_2": "1_2_2", "BtBt2_2": "1_2_2", "BtBt3_2": "1_2_2", "BtBt4_2": "1_2_2", "BtBt5_2": "1_2_2",
        "Second_Question3": "지금 내가 나아가는 방향이 올바른 방향이라고 생각하나요?", "BtBt1_3": "1_2_3", "BtBt2_3": "1_2_3", "BtBt3_3": "1_2_3", "BtBt4_3": "1_2_3", "BtBt5_3": "1_2_3",
        "Second_Question4": "지금 하고 있는 일에서 후회나 좌절감을 느끼는 경우가 있나요?", "BtBt1_4": "1_2_4", "BtBt2_4": "1_2_4", "BtBt3_4": "1_2_4", "BtBt4_4": "1_2_4", "BtBt5_4": "1_2_4",
        "Second_Question5": "내가 잘 할 수 있는 일을 알고 있다고 생각하나요?", "BtBt1_5": "1_2_5", "BtBt2_5": "1_2_5", "BtBt3_5": "1_2_5", "BtBt4_5": "1_2_5", "BtBt5_5": "1_2_5"
    },
    array[2] = {
        "Second_Question1": "요즘 들어 이민에 관심이 많아졌나요?", "BtBt1": "1_3_1", "BtBt2": "1_3_1", "BtBt3": "1_3_1", "BtBt4": "1_3_1", "BtBt5": "1_3_1",
        "Second_Question2": "내가 구할 수 있는 양질의 일자리가 많이 없다고 생각이 되나요?", "BtBt1_2": "1_3_2", "BtBt2_2": "1_3_2", "BtBt3_2": "1_3_2", "BtBt4_2": "1_3_2", "BtBt5_2": "1_3_2",
        "Second_Question3": "사회속에서 나의 한계가 보이는 것 같나요?", "BtBt1_3": "1_3_3", "BtBt2_3": "1_3_3", "BtBt3_3": "1_3_3", "BtBt4_3": "1_3_3", "BtBt5_3": "1_3_3",
        "Second_Question4": "처음부터 새롭게 시작해야 할지도 모른다는 두려움을 느낀 적이 있나요?", "BtBt1_4": "1_3_4", "BtBt2_4": "1_3_4", "BtBt3_4": "1_3_4", "BtBt4_4": "1_3_4", "BtBt5_4": "1_3_4",
        "Second_Question5": "잘 바뀌지 않는 것이 있을 때 바꾸려고 시간을 쓰기 보다는 보통 포기하는 편인가요?", "BtBt1_5": "1_3_5", "BtBt2_5": "1_3_5", "BtBt3_5": "1_3_5", "BtBt4_5": "1_3_5", "BtBt5_5": "1_3_5"
    },
    array[3] = {
        "Second_Question1": "회사나 학교에서 누군가 내 이름을 부르면 표정이 굳나요?", "BtBt1": "1_4_1", "BtBt2": "1_4_1", "BtBt3": "1_4_1", "BtBt4": "1_4_1", "BtBt5": "1_4_1",
        "Second_Question2": "회사나 학교에서 나의 능력이 충분히 인정받는다고 생각하나요?", "BtBt1_2": "1_4_2", "BtBt2_2": "1_4_2", "BtBt3_2": "1_4_2", "BtBt4_2": "1_4_2", "BtBt5_2": "1_4_2",
        "Second_Question3": "사람들의 눈치를 보거나 학교나 회사에 있는 시간이 두려울 때가 있나요?", "BtBt1_3": "1_4_3", "BtBt2_3": "1_4_3", "BtBt3_3": "1_4_3", "BtBt4_3": "1_4_3", "BtBt5_3": "1_4_3",
        "Second_Question4": "일보다 일을 같이 하는 사람이 스트레스를 주는 경우가 많나요?", "BtBt1_4": "1_4_4", "BtBt2_4": "1_4_4", "BtBt3_4": "1_4_4", "BtBt4_4": "1_4_4", "BtBt5_4": "1_4_4",
        "Second_Question5": "여러 명에게 업무 분담을 시키는 것 보다 혼자 처리하는게 더 편한가요?", "BtBt1_5": "1_4_5", "BtBt2_5": "1_4_5", "BtBt3_5": "1_4_5", "BtBt4_5": "1_4_5", "BtBt5_5": "1_4_5"
    },
    array[4] = {
        "Second_Question1": "그(녀)의 이름이 귀에 들리면 나도 모르게 집중을 하게 되나요?", "BtBt1": "1_5_1", "BtBt2": "1_5_1", "BtBt3": "1_5_1", "BtBt4": "1_5_1", "BtBt5": "1_5_1",
        "Second_Question2": "괜스레 그(녀)와의 공통점을 찾기 위해 노력하고 있나요?", "BtBt1_2": "1_5_2", "BtBt2_2": "1_5_2", "BtBt3_2": "1_5_2", "BtBt4_2": "1_5_2", "BtBt5_2": "1_5_2",
        "Second_Question3": "그(녀)의 사소한 행동에 의미를 부여하게 되나요?", "BtBt1_3": "1_5_3", "BtBt2_3": "1_5_3", "BtBt3_3": "1_5_3", "BtBt4_3": "1_5_3", "BtBt5_3": "1_5_3",
        "Second_Question4": "잠들기 전에 그(녀)의 SNS를 구경하며 잠들 때가 있나요?", "BtBt1_4": "1_5_4", "BtBt2_4": "1_5_4", "BtBt3_4": "1_5_4", "BtBt4_4": "1_5_4", "BtBt5_4": "1_5_4",
        "Second_Question5": "채팅 앱에서 사라지지 않는 숫자 1이 원망스럽게 느껴질 때가 있나요?", "BtBt1_5": "1_5_5", "BtBt2_5": "1_5_5", "BtBt3_5": "1_5_5", "BtBt4_5": "1_5_5", "BtBt5_5": "1_5_5"
    },
    array[5] = {
        "Second_Question1": "연인과의 관계에서 피로감을 느끼나요?", "BtBt1": "1_6_1", "BtBt2": "1_6_1", "BtBt3": "1_6_1", "BtBt4": "1_6_1", "BtBt5": "1_6_1",
        "Second_Question2": "나도 상대방과 분리되어 나만의 시간을 가지고 싶나요?", "BtBt1_2": "1_6_2", "BtBt2_2": "1_6_2", "BtBt3_2": "1_6_2", "BtBt4_2": "1_6_2", "BtBt5_2": "1_6_2",
        "Second_Question3": "서로 생각이 다르다는걸 느낄 때가 많아지나요?", "BtBt1_3": "1_6_3", "BtBt2_3": "1_6_3", "BtBt3_3": "1_6_3", "BtBt4_3": "1_6_3", "BtBt5_3": "1_6_3",
        "Second_Question4": "그(녀)를 만날 때 옷차림에 더 이상 큰 신경을 쓰지 않나요?", "BtBt1_4": "1_6_4", "BtBt2_4": "1_6_4", "BtBt3_4": "1_6_4", "BtBt4_4": "1_6_4", "BtBt5_4": "1_6_4",
        "Second_Question5": "점점 우선순위에서 그(녀)가 밀리고 있음을 느낄 때가 있나요?", "BtBt1_5": "1_6_5", "BtBt2_5": "1_6_5", "BtBt3_5": "1_6_5", "BtBt4_5": "1_6_5", "BtBt5_5": "1_6_5"
    },
    array[6] = {
        "Second_Question1": "늦은 밤 갑자기 생각나는 누군가가 있나요?", "BtBt1": "1_7_1", "BtBt2": "1_7_1", "BtBt3": "1_7_1", "BtBt4": "1_7_1", "BtBt5": "1_7_1",
        "Second_Question2": "목소리가 듣고 싶지만 차마 통화버튼을 누르지 못하고 있나요?", "BtBt1_2": "1_7_2", "BtBt2_2": "1_7_2", "BtBt3_2": "1_7_2", "BtBt4_2": "1_7_2", "BtBt5_2": "1_7_2",
        "Second_Question3": "실수인 척 메시지를 보내고 싶다는 충동이 드나요?", "BtBt1_3": "1_7_3", "BtBt2_3": "1_7_3", "BtBt3_3": "1_7_3", "BtBt4_3": "1_7_3", "BtBt5_3": "1_7_3",
        "Second_Question4": "과거를 회상하며 괜스레 한숨이 나올 때가 있나요?", "BtBt1_4": "1_7_4", "BtBt2_4": "1_7_4", "BtBt3_4": "1_7_4", "BtBt4_4": "1_7_4", "BtBt5_4": "1_7_4",
        "Second_Question5": "지금은 더 잘해줄 수 있을 것 같다는 생각을 할 때가 있나요?", "BtBt1_5": "1_7_5", "BtBt2_5": "1_7_5", "BtBt3_5": "1_7_5", "BtBt4_5": "1_7_5", "BtBt5_5": "1_7_5"
    },
    array[7] = {
        "Second_Question1": "부모님이 말하는 내용은 고리타분하다고 느껴지나요?", "BtBt1": "1_8_1", "BtBt2": "1_8_1", "BtBt3": "1_8_1", "BtBt4": "1_8_1", "BtBt5": "1_8_1",
        "Second_Question2": "나 혼자서 할 수 있는 일에 간섭받는게 싫은가요?", "BtBt1_2": "1_8_2", "BtBt2_2": "1_8_2", "BtBt3_2": "1_8_2", "BtBt4_2": "1_8_2", "BtBt5_2": "1_8_2",
        "Second_Question3": "빨리 돈을 모아 독립을 하는게 꿈인가요?", "BtBt1_3": "1_8_3", "BtBt2_3": "1_8_3", "BtBt3_3": "1_8_3", "BtBt4_3": "1_8_3", "BtBt5_3": "1_8_3",
        "Second_Question4": "즐거운 술자리, 아까부터 계속해서 울리는 부모님의 전화 때문에 마지못해 자리를 일어나야 하나요?", "BtBt1_4": "1_8_4", "BtBt2_4": "1_8_4", "BtBt3_4": "1_8_4", "BtBt4_4": "1_8_4", "BtBt5_4": "1_8_4",
        "Second_Question5": "부모님과 대화를 하면 피곤한가요?", "BtBt1_5": "1_8_5", "BtBt2_5": "1_8_5", "BtBt3_5": "1_8_5", "BtBt4_5": "1_8_5", "BtBt5_5": "1_8_5"
    },
    array[8] = {
        "Second_Question1": "형제가 많은 것 보다는 혼자가 낫다고 생각하나요?", "BtBt1": "1_9_1", "BtBt2": "1_9_1", "BtBt3": "1_9_1", "BtBt4": "1_9_1", "BtBt5": "1_9_1",
        "Second_Question2": "대립하는 일이 생기면 대개 내가 양보하는 편인가요?", "BtBt1_2": "1_9_2", "BtBt2_2": "1_9_2", "BtBt3_2": "1_9_2", "BtBt4_2": "1_9_2", "BtBt5_2": "1_9_2",
        "Second_Question3": "형제가 도움이 되기 보다는 문제를 일으키는 편인가요?", "BtBt1_3": "1_9_3", "BtBt2_3": "1_9_3", "BtBt3_3": "1_9_3", "BtBt4_3": "1_9_3", "BtBt5_3": "1_9_3",
        "Second_Question4": "형제 때문에 간식거리 등을 몰래 감춰두는 공간이 있나요?", "BtBt1_4": "1_9_4", "BtBt2_4": "1_9_4", "BtBt3_4": "1_9_4", "BtBt4_4": "1_9_4", "BtBt5_4": "1_9_4",
        "Second_Question5": "형제에게 들키기 싫어 새로 산 옷을 몰래 감추어둔 적이 있나요?", "BtBt1_5": "1_9_5", "BtBt2_5": "1_9_5", "BtBt3_5": "1_9_5", "BtBt4_5": "1_9_5", "BtBt5_5": "1_9_5"
    },
    array[9] = {
        "Second_Question1": "건강보조식품에 관심이 많은 편인가요?", "BtBt1": "1_10_1", "BtBt2": "1_10_1", "BtBt3": "1_10_1", "BtBt4": "1_10_1", "BtBt5": "1_10_1",
        "Second_Question2": "헬스나 운동을 주기적으로 하고 있나요?", "BtBt1_2": "1_10_2", "BtBt2_2": "1_10_2", "BtBt3_2": "1_10_2", "BtBt4_2": "1_10_2", "BtBt5_2": "1_10_2",
        "Second_Question3": "자극적인 음식보다는 소화가 잘되는 음식을 선호하게 되었나요?", "BtBt1_3": "1_10_3", "BtBt2_3": "1_10_3", "BtBt3_3": "1_10_3", "BtBt4_3": "1_10_3", "BtBt5_3": "1_10_3",
        "Second_Question4": "다른 무엇보다 건강을 우선순위에 두는 편인가요?", "BtBt1_4": "1_10_4", "BtBt2_4": "1_10_4", "BtBt3_4": "1_10_4", "BtBt4_4": "1_10_4", "BtBt5_4": "1_10_4",
        "Second_Question5": "몸의 한계로 인해 하고 싶은 것을 못하는 일이 잦은가요?", "BtBt1_5": "1_10_5", "BtBt2_5": "1_10_5", "BtBt3_5": "1_10_5", "BtBt4_5": "1_10_5", "BtBt5_5": "1_10_5"
    },
    array[10] = {
        "Second_Question1": "주말 내내 헬스클럽이나 요가, 필라테스 등을 알아보며 시간을 보내나요?", "BtBt1": "1_11_1", "BtBt2": "1_11_1", "BtBt3": "1_11_1", "BtBt4": "1_11_1", "BtBt5": "1_11_1",
        "Second_Question2": "노출의 계절이 다가오면 나도 모르게 한숨부터 나오나요?", "BtBt1_2": "1_11_2", "BtBt2_2": "1_11_2", "BtBt3_2": "1_11_2", "BtBt4_2": "1_11_2", "BtBt5_2": "1_11_2",
        "Second_Question3": "다른 사람보다 못하다고 생각되는 콤플렉스가 있나요?", "BtBt1_3": "1_11_3", "BtBt2_3": "1_11_3", "BtBt3_3": "1_11_3", "BtBt4_3": "1_11_3", "BtBt5_3": "1_11_3",
        "Second_Question4": "내 몸 때문에 이성을 만나기 꺼려지나요?", "BtBt1_4": "1_11_4", "BtBt2_4": "1_11_4", "BtBt3_4": "1_11_4", "BtBt4_4": "1_11_4", "BtBt5_4": "1_11_4",
        "Second_Question5": "내 몸을 남들과 자꾸 비교하게 되나요?", "BtBt1_5": "1_11_5", "BtBt2_5": "1_11_5", "BtBt3_5": "1_11_5", "BtBt4_5": "1_11_5", "BtBt5_5": "1_11_5"
    },
    array[11] = {
        "Second_Question1": "사용하는 기초화장품의 개수가 늘어나고 있나요?", "BtBt1": "1_12_1", "BtBt2": "1_12_1", "BtBt3": "1_12_1", "BtBt4": "1_12_1", "BtBt5": "1_12_1",
        "Second_Question2": "미용실이나 승강기 안에 있는 거울을 보고 있으면 자신감이 떨어지나요?", "BtBt1_2": "1_12_2", "BtBt2_2": "1_12_2", "BtBt3_2": "1_12_2", "BtBt4_2": "1_12_2", "BtBt5_2": "1_12_2",
        "Second_Question3": "쌍꺼풀수술은 요즘 수술도 아니래” 라는 말에 격하게 공감하나요?", "BtBt1_3": "1_12_3", "BtBt2_3": "1_12_3", "BtBt3_3": "1_12_3", "BtBt4_3": "1_12_3", "BtBt5_3": "1_12_3",
        "Second_Question4": "잠에서 깨어난 후 베개에 나부끼는 머리카락을 보며 걱정이 될 때가 있나요?", "BtBt1_4": "1_12_4", "BtBt2_4": "1_12_4", "BtBt3_4": "1_12_4", "BtBt4_4": "1_12_4", "BtBt5_4": "1_12_4",
        "Second_Question5": "환경이 조금만 바뀌어도 쉽게 트러블이 나거나 건조해지나요?", "BtBt1_5": "1_12_5", "BtBt2_5": "1_12_5", "BtBt3_5": "1_12_5", "BtBt4_5": "1_12_5", "BtBt5_5": "1_12_5"
    },
    array[12] = {
        "Second_Question1": "국가장학재단 생활비 대출이나 은행 대출을 알아본 경험이 있나요?", "BtBt1": "1_13_1", "BtBt2": "1_13_1", "BtBt3": "1_13_1", "BtBt4": "1_13_1", "BtBt5": "1_13_1",
        "Second_Question2": "사소한 것을 사는데도 가격이 신경 쓰일 때가 많은가요?", "BtBt1_2": "1_13_2", "BtBt2_2": "1_13_2", "BtBt3_2": "1_13_2", "BtBt4_2": "1_13_2", "BtBt5_2": "1_13_2",
        "Second_Question3": "월급이나 용돈을 받은 후 “이번 달은 꼭 아껴야지”라는 다짐을 매달 하게 되나요?", "BtBt1_3": "1_13_3", "BtBt2_3": "1_13_3", "BtBt3_3": "1_13_3", "BtBt4_3": "1_13_3", "BtBt5_3": "1_13_3",
        "Second_Question4": "부족한 용돈이나 월급 때문에 아르바이트를 알아보거나 부업을 생각하고 있나요?", "BtBt1_4": "1_13_4", "BtBt2_4": "1_13_4", "BtBt3_4": "1_13_4", "BtBt4_4": "1_13_4", "BtBt5_4": "1_13_4",
        "Second_Question5": "구독서비스를 여러 개 사용하는 것이 부담되나요?", "BtBt1_5": "1_13_5", "BtBt2_5": "1_13_5", "BtBt3_5": "1_13_5", "BtBt4_5": "1_13_5", "BtBt5_5": "1_13_5"
    },
    array[13] = {
        "Second_Question1": "할 일이 많은데 일이 손에 잡히지 않는 경우가 자주 있나요?", "BtBt1": "1_14_1", "BtBt2": "1_14_1", "BtBt3": "1_14_1", "BtBt4": "1_14_1", "BtBt5": "1_14_1",
        "Second_Question2": "최근 우울한 감정이 심해지는 것을 느끼나요?", "BtBt1_2": "1_14_2", "BtBt2_2": "1_14_2", "BtBt3_2": "1_14_2", "BtBt4_2": "1_14_2", "BtBt5_2": "1_14_2",
        "Second_Question3": "누군가 “뭘 하고 싶어요?”라는 말에 선뜻 답할 말이 없나요?", "BtBt1_3": "1_14_3", "BtBt2_3": "1_14_3", "BtBt3_3": "1_14_3", "BtBt4_3": "1_14_3", "BtBt5_3": "1_14_3",
        "Second_Question4": "주말이나 휴일에 “뭘 하지?” 라는 막연한 고민이 떠오르나요?", "BtBt1_4": "1_14_4", "BtBt2_4": "1_14_4", "BtBt3_4": "1_14_4", "BtBt4_4": "1_14_4", "BtBt5_4": "1_14_4",
        "Second_Question5": "자꾸만 쳐지는 느낌이 들어 일에 집중이 되지 않은가요?", "BtBt1_5": "1_14_5", "BtBt2_5": "1_14_5", "BtBt3_5": "1_14_5", "BtBt4_5": "1_14_5", "BtBt5_5": "1_14_5"
    },
    array[14] = {
        "Second_Question1": "과제나 일을 하기 위해서 자는 시간을 줄인 적이 있나요?", "BtBt1": "1_15_1", "BtBt2": "1_15_1", "BtBt3": "1_15_1", "BtBt4": "1_15_1", "BtBt5": "1_15_1",
        "Second_Question2": "내가 처리할 수 있는 일보다 더 많은 일이 주어지고 있는 것 같나요?", "BtBt1_2": "1_15_2", "BtBt2_2": "1_15_2", "BtBt3_2": "1_15_2", "BtBt4_2": "1_15_2", "BtBt5_2": "1_15_2",
        "Second_Question3": "무력감에 빠져 아무것도 손에 잡히지 않을 때가 있나요?", "BtBt1_3": "1_15_3", "BtBt2_3": "1_15_3", "BtBt3_3": "1_15_3", "BtBt4_3": "1_15_3", "BtBt5_3": "1_15_3",
        "Second_Question4": "더 많이 일하고 더 많이 버는 직업이 있어도 선뜻 마음이 가지 않나요?", "BtBt1_4": "1_15_4", "BtBt2_4": "1_15_4", "BtBt3_4": "1_15_4", "BtBt4_4": "1_15_4", "BtBt5_4": "1_15_4",
        "Second_Question5": "최근 삶의 질이 많이 떨어졌다고 생각하나요?", "BtBt1_5": "1_15_5", "BtBt2_5": "1_15_5", "BtBt3_5": "1_15_5", "BtBt4_5": "1_15_5", "BtBt5_5": "1_15_5"
    }

// For FadeOut [Main Page] and FadeIn [Second Page]
$(document).ready(function () {
    if (StartNumber == 0) {
        setTimeout(function () {
            $('.Main_Page').fadeOut(500);
            $('.Second_Page').fadeIn(500);
        }, 2500);
        StartNumber++;
        window.scrollTo(0, 0);
    }
})

// For FadeOut [Second Page] and FadeIn [Third Page]
$('.Start').click(function () {
    if (StartNumber == 1) {
        setTimeout(function () {
            $('.Second_Page').fadeOut(500);
            $('.Third_Page').fadeIn(500);
        }, 500);
        StartNumber++;
        window.scrollTo(0, 0);
    }
})

// For Select First Question Button [Color, Value]
$('#FQBt1').click(function () {
    var value = $('.First_Question_value1').val();
    if (value == 0) {
        $('#FQBt1').attr('class', 'First_Question_Bt_Click');
        $('.First_Question_value1').val(1);
        var offset = $('#FQBt1').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt1').attr('class', 'First_Question_Bt');
        $('.First_Question_value1').val(0);
        var offset = $('#FQBt1').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Second Question Button [Color, Value]
$('#FQBt2').click(function () {
    var value = $('.First_Question_value2').val();
    if (value == 0) {
        $('#FQBt2').attr('class', 'First_Question_Bt_Click2');
        $('.First_Question_value2').val(1);
        var offset = $('#FQBt2').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt2').attr('class', 'First_Question_Bt');
        $('.First_Question_value2').val(0);
        var offset = $('#FQBt2').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Third Question Button [Color, Value]
$('#FQBt3').click(function () {
    var value = $('.First_Question_value3').val();
    if (value == 0) {
        $('#FQBt3').attr('class', 'First_Question_Bt_Click3');
        $('.First_Question_value3').val(1);
        var offset = $('#FQBt3').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt3').attr('class', 'First_Question_Bt');
        $('.First_Question_value3').val(0);
        var offset = $('#FQBt3').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For Select Fourth Question Button [Color, Value]
$('#FQBt4').click(function () {
    var value = $('.First_Question_value4').val();
    if (value == 0) {
        $('#FQBt4').attr('class', 'First_Question_Bt_Click4');
        $('.First_Question_value4').val(1);
        var offset = $('#FQBt4').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    } else if (value == 1) {
        $('#FQBt4').attr('class', 'First_Question_Bt');
        $('.First_Question_value4').val(0);
        var offset = $('#FQBt4').offset();
        $('html, body').animate({ scrollTop: offset.top }, 500);
    }

})

// For FadeOut [Third Page] and FadeIn [Fourth Page]
$('.Next').click(function () {
    $('#span').addClass('icon-spin4-alt animate-spin');
    if (StartNumber == 2) {
        setTimeout(function () {
            $('.Third_Page').fadeOut(500);
            $('.Fourth_Page').fadeIn(500);
        }, 1000);
        StartNumber++;
        window.scrollTo(0, 0);
    } ArrayModify();
})

// To modify the array
function ArrayModify() {
    var First = $('.First_Question_value1').val();
    var Second = $('.First_Question_value2').val();
    var Third = $('.First_Question_value3').val();
    var Fourth = $('.First_Question_value4').val();
    if (First == 0) {
        delete array[0];
        delete array[1];
        delete array[2];
    } if (Second == 0) {
        delete array[3];
        delete array[4];
        delete array[5];
        delete array[6];
        delete array[7];
        delete array[8];
    } if (Third == 0) {
        delete array[9];
        delete array[10];
        delete array[11];
    } if (Fourth == 0) {
        delete array[12];
        delete array[13];
        delete array[14];
    } if (First == 0 && Second == 0 && Third == 0 && Fourth == 0) {
        alert("최소 하나 이상의 선택지를 선택해주세요.\nPlease select at least one option.");
        window.location.reload();
    }
    CurrentPage++
    array = array.filter(item => item);
    var TotalPage = array.length;
    $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>');
    Next();
}

// Inset the value of arrayy in third page [First]
function Next() {
    // Second Question <P> Insert through the array
    $("#Second_Question1").html(array[number]["Second_Question1"]);
    $("#Second_Question2").html(array[number]["Second_Question2"]);
    $("#Second_Question3").html(array[number]["Second_Question3"]);
    $("#Second_Question4").html(array[number]["Second_Question4"]);
    $("#Second_Question5").html(array[number]["Second_Question5"]);
    // Second Question <First Button> Insert through the array
    $('#BtBt1').val(array[number]["BtBt1"]);
    $('#BtBt2').val(array[number]["BtBt2"]);
    $('#BtBt3').val(array[number]["BtBt3"]);
    $('#BtBt4').val(array[number]["BtBt4"]);
    $('#BtBt5').val(array[number]["BtBt5"]);
    // Second Question <Second Button> Insert through the array
    $('#BtBt1_2').val(array[number]["BtBt1_2"]);
    $('#BtBt2_2').val(array[number]["BtBt2_2"]);
    $('#BtBt3_2').val(array[number]["BtBt3_2"]);
    $('#BtBt4_2').val(array[number]["BtBt4_2"]);
    $('#BtBt5_2').val(array[number]["BtBt5_2"]);
    // Second Question <Third Button> Insert through the array
    $('#BtBt1_3').val(array[number]["BtBt1_3"]);
    $('#BtBt2_3').val(array[number]["BtBt2_3"]);
    $('#BtBt3_3').val(array[number]["BtBt3_3"]);
    $('#BtBt4_3').val(array[number]["BtBt4_3"]);
    $('#BtBt5_3').val(array[number]["BtBt5_3"]);
    // Second Question <Fourth Button> Insert through the array
    $('#BtBt1_4').val(array[number]["BtBt1_4"]);
    $('#BtBt2_4').val(array[number]["BtBt2_4"]);
    $('#BtBt3_4').val(array[number]["BtBt3_4"]);
    $('#BtBt4_4').val(array[number]["BtBt4_4"]);
    $('#BtBt5_4').val(array[number]["BtBt5_4"]);
    // Second Question <Fifth Button> Insert through the array
    $('#BtBt1_5').val(array[number]["BtBt1_5"]);
    $('#BtBt2_5').val(array[number]["BtBt2_5"]);
    $('#BtBt3_5').val(array[number]["BtBt3_5"]);
    $('#BtBt4_5').val(array[number]["BtBt4_5"]);
    $('#BtBt5_5').val(array[number]["BtBt5_5"]);
    // Second Question Button Reset
    $('#BtBt1').attr('class', 'Second_Question_Bt');
    $('#BtBt2').attr('class', 'Second_Question_Bt');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_2').attr('class', 'Second_Question_Bt');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_3').attr('class', 'Second_Question_Bt');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_4').attr('class', 'Second_Question_Bt');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    $('#BtBt1_5').attr('class', 'Second_Question_Bt');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    // Second Next Step Button Reset
    $('#span2').removeClass();
}

// Inset the value of arrayy in third page [Second]
function NextStep() {
    setTimeout(function () {
        $('#span2').addClass('icon-spin4-alt animate-spin');
    }, 100);
    setTimeout(function () {
        Sum();
        window.scrollTo(0, 0);
        number++;
        array = array.filter(item => item);
        var TotalPage = array.length;
        if (number >= TotalPage) {
            $('.Fourth_Page').fadeOut(500);
            $('.Fifth_Page').fadeIn(500);
        } else {
            // Second Question <P> Insert through the array
            $("#Second_Question1").html(array[number]["Second_Question1"]);
            $("#Second_Question2").html(array[number]["Second_Question2"]);
            $("#Second_Question3").html(array[number]["Second_Question3"]);
            $("#Second_Question4").html(array[number]["Second_Question4"]);
            $("#Second_Question5").html(array[number]["Second_Question5"]);
            // Second Question <First Button> Insert through the array
            $('#BtBt1').val(array[number]["BtBt1"]);
            $('#BtBt2').val(array[number]["BtBt2"]);
            $('#BtBt3').val(array[number]["BtBt3"]);
            $('#BtBt4').val(array[number]["BtBt4"]);
            $('#BtBt5').val(array[number]["BtBt5"]);
            // Second Question <Second Button> Insert through the array
            $('#BtBt1_2').val(array[number]["BtBt1_2"]);
            $('#BtBt2_2').val(array[number]["BtBt2_2"]);
            $('#BtBt3_2').val(array[number]["BtBt3_2"]);
            $('#BtBt4_2').val(array[number]["BtBt4_2"]);
            $('#BtBt5_2').val(array[number]["BtBt5_2"]);
            // Second Question <Third Button> Insert through the array
            $('#BtBt1_3').val(array[number]["BtBt1_3"]);
            $('#BtBt2_3').val(array[number]["BtBt2_3"]);
            $('#BtBt3_3').val(array[number]["BtBt3_3"]);
            $('#BtBt4_3').val(array[number]["BtBt4_3"]);
            $('#BtBt5_3').val(array[number]["BtBt5_3"]);
            // Second Question <Fourth Button> Insert through the array
            $('#BtBt1_4').val(array[number]["BtBt1_4"]);
            $('#BtBt2_4').val(array[number]["BtBt2_4"]);
            $('#BtBt3_4').val(array[number]["BtBt3_4"]);
            $('#BtBt4_4').val(array[number]["BtBt4_4"]);
            $('#BtBt5_4').val(array[number]["BtBt5_4"]);
            // Second Question <Fifth Button> Insert through the array
            $('#BtBt1_5').val(array[number]["BtBt1_5"]);
            $('#BtBt2_5').val(array[number]["BtBt2_5"]);
            $('#BtBt3_5').val(array[number]["BtBt3_5"]);
            $('#BtBt4_5').val(array[number]["BtBt4_5"]);
            $('#BtBt5_5').val(array[number]["BtBt5_5"]);
            $('#span2').removeClass();
            // Second Question Button Reset
            $('#BtBt1').attr('class', 'Second_Question_Bt');
            $('#BtBt2').attr('class', 'Second_Question_Bt');
            $('#BtBt3').attr('class', 'Second_Question_Bt');
            $('#BtBt4').attr('class', 'Second_Question_Bt');
            $('#BtBt5').attr('class', 'Second_Question_Bt');
            $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_2').attr('class', 'Second_Question_Bt');
            $('#BtBt2_2').attr('class', 'Second_Question_Bt');
            $('#BtBt3_2').attr('class', 'Second_Question_Bt');
            $('#BtBt4_2').attr('class', 'Second_Question_Bt');
            $('#BtBt5_2').attr('class', 'Second_Question_Bt');
            $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_3').attr('class', 'Second_Question_Bt');
            $('#BtBt2_3').attr('class', 'Second_Question_Bt');
            $('#BtBt3_3').attr('class', 'Second_Question_Bt');
            $('#BtBt4_3').attr('class', 'Second_Question_Bt');
            $('#BtBt5_3').attr('class', 'Second_Question_Bt');
            $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_4').attr('class', 'Second_Question_Bt');
            $('#BtBt2_4').attr('class', 'Second_Question_Bt');
            $('#BtBt3_4').attr('class', 'Second_Question_Bt');
            $('#BtBt4_4').attr('class', 'Second_Question_Bt');
            $('#BtBt5_4').attr('class', 'Second_Question_Bt');
            $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
            $('#BtBt1_5').attr('class', 'Second_Question_Bt');
            $('#BtBt2_5').attr('class', 'Second_Question_Bt');
            $('#BtBt3_5').attr('class', 'Second_Question_Bt');
            $('#BtBt4_5').attr('class', 'Second_Question_Bt');
            $('#BtBt5_5').attr('class', 'Second_Question_Bt');
            $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
            // Second Next Step Button Reset
            $('#span2').removeClass();
            CurrentPage++;
            array = array.filter(item => item);
            var TotalPage = array.length;
            $('.CurrentPage_TotalPage').html('<p>' + CurrentPage + "/" + TotalPage + '</p>')
        }
    }, 1000);
}

// For Second Value Sum
function Sum() {
    if ($('#BtBt1').val() == "1_1_1") {
        var Second_Value1 = $('.1_1_1').val();
        var Second_Value2 = $('.1_1_2').val();
        var Second_Value3 = $('.1_1_3').val();
        var Second_Value4 = $('.1_1_4').val();
        var Second_Value5 = $('.1_1_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_1_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_2_1") {
        var Second_Value1 = $('.1_2_1').val();
        var Second_Value2 = $('.1_2_2').val();
        var Second_Value3 = $('.1_2_3').val();
        var Second_Value4 = $('.1_2_4').val();
        var Second_Value5 = $('.1_2_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_2_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_3_1") {
        var Second_Value1 = $('.1_3_1').val();
        var Second_Value2 = $('.1_3_2').val();
        var Second_Value3 = $('.1_3_3').val();
        var Second_Value4 = $('.1_3_4').val();
        var Second_Value5 = $('.1_3_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_3_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_4_1") {
        var Second_Value1 = $('.1_4_1').val();
        var Second_Value2 = $('.1_4_2').val();
        var Second_Value3 = $('.1_4_3').val();
        var Second_Value4 = $('.1_4_4').val();
        var Second_Value5 = $('.1_4_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_4_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_5_1") {
        var Second_Value1 = $('.1_5_1').val();
        var Second_Value2 = $('.1_5_2').val();
        var Second_Value3 = $('.1_5_3').val();
        var Second_Value4 = $('.1_5_4').val();
        var Second_Value5 = $('.1_5_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_5_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_6_1") {
        var Second_Value1 = $('.1_6_1').val();
        var Second_Value2 = $('.1_6_2').val();
        var Second_Value3 = $('.1_6_3').val();
        var Second_Value4 = $('.1_6_4').val();
        var Second_Value5 = $('.1_6_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_6_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_7_1") {
        var Second_Value1 = $('.1_7_1').val();
        var Second_Value2 = $('.1_7_2').val();
        var Second_Value3 = $('.1_7_3').val();
        var Second_Value4 = $('.1_7_4').val();
        var Second_Value5 = $('.1_7_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_7_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_8_1") {
        var Second_Value1 = $('.1_8_1').val();
        var Second_Value2 = $('.1_8_2').val();
        var Second_Value3 = $('.1_8_3').val();
        var Second_Value4 = $('.1_8_4').val();
        var Second_Value5 = $('.1_8_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_8_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_9_1") {
        var Second_Value1 = $('.1_9_1').val();
        var Second_Value2 = $('.1_9_2').val();
        var Second_Value3 = $('.1_9_3').val();
        var Second_Value4 = $('.1_9_4').val();
        var Second_Value5 = $('.1_9_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_9_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_10_1") {
        var Second_Value1 = $('.1_10_1').val();
        var Second_Value2 = $('.1_10_2').val();
        var Second_Value3 = $('.1_10_3').val();
        var Second_Value4 = $('.1_10_4').val();
        var Second_Value5 = $('.1_10_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_10_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_11_1") {
        var Second_Value1 = $('.1_11_1').val();
        var Second_Value2 = $('.1_11_2').val();
        var Second_Value3 = $('.1_11_3').val();
        var Second_Value4 = $('.1_11_4').val();
        var Second_Value5 = $('.1_11_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_11_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_12_1") {
        var Second_Value1 = $('.1_12_1').val();
        var Second_Value2 = $('.1_12_2').val();
        var Second_Value3 = $('.1_12_3').val();
        var Second_Value4 = $('.1_12_4').val();
        var Second_Value5 = $('.1_12_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_12_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_13_1") {
        var Second_Value1 = $('.1_13_1').val();
        var Second_Value2 = $('.1_13_2').val();
        var Second_Value3 = $('.1_13_3').val();
        var Second_Value4 = $('.1_13_4').val();
        var Second_Value5 = $('.1_13_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_13_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_14_1") {
        var Second_Value1 = $('.1_14_1').val();
        var Second_Value2 = $('.1_14_2').val();
        var Second_Value3 = $('.1_14_3').val();
        var Second_Value4 = $('.1_14_4').val();
        var Second_Value5 = $('.1_14_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_14_6').attr('value', Second_Value_Sum);
    } else if ($('#BtBt1').val() == "1_15_1") {
        var Second_Value1 = $('.1_15_1').val();
        var Second_Value2 = $('.1_15_2').val();
        var Second_Value3 = $('.1_15_3').val();
        var Second_Value4 = $('.1_15_4').val();
        var Second_Value5 = $('.1_15_5').val();
        var Second_Value_Sum = Second_Value1 * 1 + Second_Value2 * 1 + Second_Value3 * 1 + Second_Value4 * 1 + Second_Value5 * 1;
        $('.1_15_6').attr('value', Second_Value_Sum);
    }
}

// For Change Result Value and First Button CSS
$('#BtBt1').click(function () {
    var type = $('#BtBt1').val();
    $("." + type).val(1);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2').attr('class', 'Second_Question_Bt');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second Button CSS
$('#BtBt2').click(function () {
    var type = $('#BtBt2').val();
    $("." + type).val(2);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3').attr('class', 'Second_Question_Bt');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third Button CSS
$('#BtBt3').click(function () {
    var type = $('#BtBt3').val();
    $("." + type).val(3);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4').attr('class', 'Second_Question_Bt');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth Button CSS
$('#BtBt4').click(function () {
    var type = $('#BtBt4').val();
    $("." + type).val(4);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5').attr('class', 'Second_Question_Bt');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth Button CSS
$('#BtBt5').click(function () {
    var type = $('#BtBt1').val();
    $("." + type).val(5);
    $('#BtBt1').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 2 Button CSS
$('#BtBt1_2').click(function () {
    var type = $('#BtBt1_2').val();
    $("." + type).val(1);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 2 Button CSS
$('#BtBt2_2').click(function () {
    var type = $('#BtBt2_2').val();
    $("." + type).val(2);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 2 Button CSS
$('#BtBt3_2').click(function () {
    var type = $('#BtBt3_2').val();
    $("." + type).val(3);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 2 Button CSS
$('#BtBt4_2').click(function () {
    var type = $('#BtBt4_2').val();
    $("." + type).val(4);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 2 Button CSS
$('#BtBt5_2').click(function () {
    var type = $('#BtBt5_2').val();
    $("." + type).val(5);
    $('#BtBt1_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_2').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_2').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_2').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 3 Button CSS
$('#BtBt1_3').click(function () {
    var type = $('#BtBt1_3').val();
    $("." + type).val(1);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 3 Button CSS
$('#BtBt2_3').click(function () {
    var type = $('#BtBt2_3').val();
    $("." + type).val(2);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 3 Button CSS
$('#BtBt3_3').click(function () {
    var type = $('#BtBt3_3').val();
    $("." + type).val(3);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 3 Button CSS
$('#BtBt4_3').click(function () {
    var type = $('#BtBt4_3').val();
    $("." + type).val(4);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 3 Button CSS
$('#BtBt5_3').click(function () {
    var type = $('#BtBt5_3').val();
    $("." + type).val(5);
    $('#BtBt1_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_3').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_3').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_3').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 4 Button CSS
$('#BtBt1_4').click(function () {
    var type = $('#BtBt1_4').val();
    $("." + type).val(1);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 4 Button CSS
$('#BtBt2_4').click(function () {
    var type = $('#BtBt2_4').val();
    $("." + type).val(2);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 4 Button CSS
$('#BtBt3_4').click(function () {
    var type = $('#BtBt3_4').val();
    $("." + type).val(3);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 4 Button CSS
$('#BtBt4_4').click(function () {
    var type = $('#BtBt4_4').val();
    $("." + type).val(4);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 4 Button CSS
$('#BtBt5_4').click(function () {
    var type = $('#BtBt5_4').val();
    $("." + type).val(5);
    $('#BtBt1_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_4').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_4').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_4').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and First 5 Button CSS
$('#BtBt1_5').click(function () {
    var type = $('#BtBt1_5').val();
    $("." + type).val(1);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click1');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Second 5 Button CSS
$('#BtBt2_5').click(function () {
    var type = $('#BtBt2_5').val();
    $("." + type).val(2);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click2');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Third 5 Button CSS
$('#BtBt3_5').click(function () {
    var type = $('#BtBt3_5').val();
    $("." + type).val(3);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click3');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fourth 5 Button CSS
$('#BtBt4_5').click(function () {
    var type = $('#BtBt4_5').val();
    $("." + type).val(4);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt_Click4');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Change Result Value and Fifth 5 Button CSS
$('#BtBt5_5').click(function () {
    var type = $('#BtBt5_5').val();
    $("." + type).val(5);
    $('#BtBt1_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt2_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt3_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt4_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt5_5').attr('class', 'Second_Question_Bt_Click5');
    $('#BtBt6_5').attr('class', 'Second_Question_Bt_Click5_Plus');
    var offset = $('#BtBt1_5').offset();
    $('html, body').animate({ scrollTop: offset.top }, 500);
}
)

// For Calculate The Result value
function Result() {
    setTimeout(function () {
        $('#span3').addClass('icon-spin4-alt animate-spin');
    }, 100);
    setTimeout(function () {
        var Array_1 = $('.1_1_6').val();
        var Array_2 = $('.1_2_6').val();
        var Array_3 = $('.1_3_6').val();
        var Array_4 = $('.1_4_6').val();
        var Array_5 = $('.1_5_6').val();
        var Array_6 = $('.1_6_6').val();
        var Array_7 = $('.1_7_6').val();
        var Array_8 = $('.1_8_6').val();
        var Array_9 = $('.1_9_6').val();
        var Array_10 = $('.1_10_6').val();
        var Array_11 = $('.1_11_6').val();
        var Array_12 = $('.1_12_6').val();
        var Array_13 = $('.1_13_6').val();
        var Array_14 = $('.1_14_6').val();
        var Array_15 = $('.1_15_6').val();
        var Result_Array = [
            Array_1 * 1, Array_2 * 1, Array_3 * 1, Array_4 * 1, Array_5 * 1, Array_6 * 1, Array_7 * 1, Array_8 * 1, Array_9 * 1, Array_10 * 1, Array_11 * 1, Array_12 * 1, Array_13 * 1, Array_14 * 1, Array_15 * 1]
        var TopScore = Math.max.apply(null, Result_Array);
        if (Array_1 == Array_2 || Array_1 == Array_3 || Array_1 == Array_4 || Array_1 == Array_5 || Array_1 == Array_6 || Array_1 == Array_7 || Array_1 == Array_8 || Array_1 == Array_9 || Array_1 == Array_10 || Array_1 == Array_11 || Array_1 == Array_12 || Array_1 == Array_13 || Array_1 == Array_14 || Array_1 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_1 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_1_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_1) {
            MovePageToResult1();
            $('#span3').removeClass();
        } else if (Array_2 == Array_3 || Array_2 == Array_4 || Array_2 == Array_5 || Array_2 == Array_6 || Array_2 == Array_7 || Array_2 == Array_8 || Array_2 == Array_9 || Array_2 == Array_10 || Array_2 == Array_11 || Array_2 == Array_12 || Array_2 == Array_13 || Array_2 == Array_14 || Array_2 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_2 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_2_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_2) {
            alert("진로/적성문제");
            $('#span3').removeClass();
        } else if (Array_3 == Array_4 || Array_3 == Array_5 || Array_3 == Array_6 || Array_3 == Array_7 || Array_3 == Array_8 || Array_3 == Array_9 || Array_3 == Array_10 || Array_3 == Array_11 || Array_3 == Array_12 || Array_3 == Array_13 || Array_3 == Array_14 || Array_3 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_3 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_3_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_3) {
            alert("사회구조적문제");
            $('#span3').removeClass();
        } else if (Array_4 == Array_5 || Array_4 == Array_6 || Array_4 == Array_7 || Array_4 == Array_8 || Array_4 == Array_9 || Array_4 == Array_10 || Array_4 == Array_11 || Array_4 == Array_12 || Array_4 == Array_13 || Array_4 == Array_14 || Array_4 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_4 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_4_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_4) {
            alert("대인관계");
            $('#span3').removeClass();
        } else if (Array_5 == Array_6 || Array_5 == Array_7 || Array_5 == Array_8 || Array_5 == Array_9 || Array_5 == Array_10 || Array_5 == Array_11 || Array_5 == Array_12 || Array_5 == Array_13 || Array_5 == Array_14 || Array_5 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_5 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_5_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_5) {
            alert("짝사랑");
            $('#span3').removeClass();
        } else if (Array_6 == Array_7 || Array_6 == Array_8 || Array_6 == Array_9 || Array_6 == Array_10 || Array_6 == Array_11 || Array_6 == Array_12 || Array_6 == Array_13 || Array_6 == Array_14 || Array_6 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_6 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_6_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_6) {
            alert("권태기");
            $('#span3').removeClass();
        } else if (Array_7 == Array_8 || Array_7 == Array_9 || Array_7 == Array_10 || Array_7 == Array_11 || Array_7 == Array_12 || Array_7 == Array_13 || Array_7 == Array_14 || Array_7 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_7 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_7_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_7) {
            alert("미련");
            $('#span3').removeClass();
        } else if (Array_8 == Array_9 || Array_8 == Array_10 || Array_8 == Array_11 || Array_8 == Array_12 || Array_8 == Array_13 || Array_8 == Array_14 || Array_8 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_8 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_8_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_8) {
            alert("부모님");
            $('#span3').removeClass();
        } else if (Array_9 == Array_10 || Array_9 == Array_11 || Array_9 == Array_12 || Array_9 == Array_13 || Array_9 == Array_14 || Array_9 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_9 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_9_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_9) {
            alert("형제자매");
            $('#span3').removeClass();
        } else if (Array_10 == Array_11 || Array_10 == Array_12 || Array_10 == Array_13 || Array_10 == Array_14 || Array_10 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_10 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_10_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_10) {
            alert("건강");
            $('#span3').removeClass();
        } else if (Array_11 == Array_12 || Array_11 == Array_13 || Array_11 == Array_14 || Array_11 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_11 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_11_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_11) {
            alert("신체");
            $('#span3').removeClass();
        } else if (Array_12 == Array_13 || Array_12 == Array_14 || Array_12 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_12 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_12_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_12) {
            alert("외모");
            $('#span3').removeClass();
        } else if (Array_13 == Array_14 || Array_13 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_13 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_13_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_13) {
            alert("생활비");
            $('#span3').removeClass();
        } else if (Array_14 == Array_15) {
            var RandomPlusValue = Math.random() * 1;
            var RandomMinusValue = Math.random() * -1;
            var ModifiedValue = Array_14 * 1 + RandomPlusValue + RandomMinusValue;
            $('.1_14_6').attr('value', ModifiedValue);
            Result();
        } else if (TopScore == Array_14) {
            alert("무기력증");
            $('#span3').removeClass();
        } else if (TopScore == Array_15) {
            alert("번아웃");
            $('#span3').removeClass();
        }
    }, 500);
}
