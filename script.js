    let userData = { gender: 'male' };
    let currentDorm = 'new'; 
    let currentMachineType = 'wash';
    let myUsageList = [];    

    const laundryData = {
        "new-male": [
            {id:"세탁기 1", type:"wash", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 2", type:"wash", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 3", type:"wash", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 4", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"세탁기 5", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 6", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 7", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 8", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 1", type:"dry", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 2", type:"dry", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 3", type:"dry", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 4", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"건조기 5", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 6", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 7", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 8", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']}
        ],
        "new-female": [
            {id:"세탁기 1", type:"wash", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 2", type:"wash", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 3", type:"wash", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 4", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"세탁기 5", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 6", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 7", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 8", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 9", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 1", type:"dry", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 2", type:"dry", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 3", type:"dry", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 4", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"건조기 5", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']}
        ],
        "old-male": [
            {id:"세탁기 1", type:"wash", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 2", type:"wash", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 3", type:"wash", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 4", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"세탁기 5", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 6", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 7", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 8", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 1", type:"dry", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 2", type:"dry", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 3", type:"dry", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 4", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"건조기 5", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 6", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 7", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']}
        ],
        "old-female": [
            {id:"세탁기 1", type:"wash", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 2", type:"wash", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 3", type:"wash", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 4", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']},
            {id:"세탁기 5", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"세탁기 6", type:"wash", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 1", type:"dry", timeline:['active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 2", type:"dry", timeline:['active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 3", type:"dry", timeline:['idle', 'idle', 'active', 'active', 'active', 'active', 'active', 'idle', 'idle', 'idle', 'idle', 'idle']},
            {id:"건조기 4", type:"dry", timeline:['idle', 'idle', 'idle', 'idle', 'idle', 'idle', 'active', 'active', 'active', 'active', 'idle', 'idle']}
        ]
    };

    const totalCounts = {
        "male": {
            "old": { wash: 8, dry: 7 },
            "new": { wash: 8, dry: 8 }
        },
        "female": {
            "old": { wash: 6, dry: 4 },
            "new": { wash: 9, dry: 5 }
        }
    };

    function selectGender(g) {
        userData.gender = g;
        document.getElementById('g-male').classList.toggle('selected', g === 'male');
        document.getElementById('g-female').classList.toggle('selected', g === 'female');
        updateDashboard();
    }

    function handleLogin() {
        const id = document.getElementById('in-id').value;
        const name = document.getElementById('in-name').value;
        const phone = document.getElementById('in-phone').value;
        if(!id || !name || !phone) { alert("모든 정보를 입력해주세요."); return; }
        document.getElementById('out-name').innerText = name;
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-nav').style.display = 'block';
        updateDashboard();
        renderContents();
    }

    // [수정] 애니메이션이 포함된 건물 변경 함수
    function changeDorm(dorm, btn, bgId) {
        currentDorm = dorm;
        const switcher = btn.parentNode;
        const bg = document.getElementById(bgId);
        const btns = switcher.querySelectorAll('.dorm-btn');
        
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 배경 슬라이드 애니메이션
        bg.style.transform = (dorm === 'old') ? 'translateX(100%)' : 'translateX(0)';
        
        // 지도 페이지와 상태 페이지 동기화 (선택사항)
        document.getElementById('bg-status').style.transform = bg.style.transform;
        document.getElementById('bg-map').style.transform = bg.style.transform;
        document.querySelectorAll('.dorm-btn').forEach(b => {
            if(b.innerText === btn.innerText) b.classList.add('active');
            else b.classList.remove('active');
        });

        renderContents();
    }

    function switchMachinetype(type, btn, bgId) {
        currentMachineType = type;
        const switcher = btn.parentNode;
        const bg = document.getElementById(bgId);
        const btns = switcher.querySelectorAll('.machine-type-btn');
        
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 배경 슬라이드 애니메이션
        bg.style.transform = (type === 'dry') ? 'translateX(100%)' : 'translateX(0)';
        document.getElementById('bg-machine').style.transform = bg.style.transform;
        document.querySelectorAll('.machine-type-btn').forEach(b => {
            if(b.innerText === btn.innerText) b.classList.add('active');
            else b.classList.remove('active');
        });

        renderContents();
    }

    function updateDashboard() {
        const gender = userData.gender;
        const types = [
            { id: 'count-old-wash', dorm: 'old', type: 'wash', label: '세탁기' },
            { id: 'count-old-dry', dorm: 'old', type: 'dry', label: '건조기' },
            { id: 'count-new-wash', dorm: 'new', type: 'wash', label: '세탁기' },
            { id: 'count-new-dry', dorm: 'new', type: 'dry', label: '건조기' }
        ];

        types.forEach(t => {
            const count = totalCounts[gender][t.dorm][t.type];
            const el = document.getElementById(t.id);
            el.innerText = `${count}개`;
        });
    }

    function renderContents() {
        const key = `${currentDorm}-${userData.gender}`;
        const data = laundryData[key];
        const statusList = document.getElementById('status-list');
        const mapImg = document.getElementById('laundry-map-img');

        statusList.innerHTML = '';
        
        // 현재 기계 타입에 해당하는 기계만 필터링
        const filteredData = data.filter(item => item.type === currentMachineType);
        
        filteredData.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            // 기계 번호
            const machineNum = document.createElement('div');
            machineNum.className = 'machine-number';
            machineNum.textContent = index + 1;
            
            // 타임라인 바
            const timelineBar = document.createElement('div');
            timelineBar.className = 'timeline-bar';
            
            // 타임라인 세그먼트 생성
            item.timeline.forEach(status => {
                const segment = document.createElement('div');
                segment.className = `timeline-segment ${status}`;
                timelineBar.appendChild(segment);
            });
            
            timelineItem.appendChild(machineNum);
            timelineItem.appendChild(timelineBar);
            timelineItem.onclick = () => showDetail(item);
            statusList.appendChild(timelineItem);
        });

        const fileName = (currentDorm === 'new' && userData.gender === 'female') ? "neww_female.png" : `${currentDorm}_${userData.gender}.png`;
        mapImg.src = fileName;
    }

    function showDetail(item) {
        document.getElementById('modal-title').innerText = item.id;
        document.getElementById('modal-info').innerHTML = `지난 2시간 동안의 사용 현황입니다.`;
        document.getElementById('btn-reg-usage').onclick = () => { registerUsage(item); closeModal(); };
        document.getElementById('modal-overlay').style.display = 'flex';
    }

    function registerUsage(item) {
        const dormName = currentDorm === 'new' ? '신관' : '구관';
        const uid = `${dormName}-${item.id}`;
        if (myUsageList.some(l => l.uid === uid)) { alert('이미 등록되었습니다.'); return; }
        myUsageList.push({ uid, dorm: dormName, name: item.id });
        updateUsageUI();
        alert('등록되었습니다. 마이페이지에서 확인하세요.');
    }

    function unregisterUsage(uid) {
        myUsageList = myUsageList.filter(l => l.uid !== uid);
        updateUsageUI();
    }

    function updateUsageUI() {
        const container = document.getElementById('usage-list');
        if (myUsageList.length === 0) {
            container.innerHTML = '<div style="border: 1px dashed #ccc; padding: 15px; border-radius: 12px; text-align: center; color: #aaa; font-size: 13px;">등록된 기기가 없습니다.</div>';
            return;
        }
        container.innerHTML = '';
        myUsageList.forEach(item => {
            const card = document.createElement('div');
            card.className = 'usage-card';
            card.innerHTML = `<div style="font-size:13px;"><b>${item.name}</b><br><small>${item.dorm} 세탁실</small></div>
                              <button onclick="unregisterUsage('${item.uid}')" style="background: #0B0742 ; color: white; border:1px solid black; padding:4px 8px; border-radius: 15px; cursor:pointer; font-size:12px;">해제</button>`;
            container.appendChild(card);
        });
    }

    function toggleAlert(name) {
        if(event.target.checked) alert(`[${name}] 빈 자리가 생기면 알림을 보내드립니다.`);
    }

    function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }
    
    function switchTab(pageId, el) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(pageId).classList.add('active-page');
        el.classList.add('active');
        if(pageId === 'my-page') updateDashboard();
    }


    updateDashboard();