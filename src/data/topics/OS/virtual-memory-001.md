---
category: technical-focus
certifications:
- computer-systems
difficulty: advanced
id: virtual-memory-001
importance: 5
keywords:
- 페이징
- 세그멘테이션
- Page Fault
- TLB
- 페이지 교체
relatedTopics:
- cache-memory-001
- process-thread-001
subcategory: 운영체제
subjectCategories:
- OS
title: 가상 메모리
trends:
- 대용량 페이지(Huge Pages)
- NVDIMM 기반 메모리
- CXL 메모리 확장
- 메모리 압축
---

# 정의
물리 메모리의 한계를 극복하기 위해 디스크를 보조 기억장치로 활용하여 논리적으로 큰 메모리 공간을 제공하는 기법입니다.

## 동작원리
가상 메모리는 주소 변환과 페이징을 통해 동작합니다:

주소 변환 과정 (Address Translation)
1) CPU가 논리 주소(Virtual Address) 생성
2) 논리 주소를 페이지 번호(Page Number)와 오프셋(Offset)으로 분할
   - 예: 32비트 주소, 4KB 페이지 → 상위 20비트(페이지), 하위 12비트(오프셋)
3) TLB 확인 (Translation Lookaside Buffer)
   - Hit: 물리 프레임 번호 즉시 반환
   - Miss: 페이지 테이블 접근
4) 페이지 테이블 조회
   - Valid bit 확인
   - Valid=1: 물리 프레임 번호 반환
   - Valid=0: Page Fault 발생
5) 물리 주소 = 프레임 번호 + 오프셋

Page Fault 처리 절차
1) Page Fault 인터럽트 발생
2) OS가 페이지 테이블에서 디스크 주소 확인
3) 빈 프레임 할당
   - 없으면 페이지 교체 알고리즘 실행 (LRU, FIFO 등)
   - 희생 페이지(Victim Page) 선택
   - Dirty bit=1이면 디스크에 Write-back
4) 디스크에서 요청 페이지 로드
5) 페이지 테이블 갱신 (Valid bit=1, 프레임 번호 설정)
6) TLB 갱신
7) 명령어 재실행

LRU 알고리즘 동작 (Least Recently Used)
- 각 페이지에 마지막 접근 시간 기록
- 교체 시 가장 오래전에 사용된 페이지 선택
- 구현: 스택, 카운터, 하드웨어 지원
- 근사 LRU: Clock 알고리즘 (Reference bit 사용)

## 특징
- 페이징 vs 세그멘테이션: 페이징은 고정 크기 페이지(4KB)로 분할하여 외부 단편화 없음, 내부 단편화 존재. 세그멘테이션은 가변 크기 세그먼트(코드, 데이터, 스택)로 논리적 분할, 외부 단편화 발생. 현대 OS는 페이지드 세그멘테이션 혼합
- 페이지 부재(Page Fault): 요청한 페이지가 물리 메모리에 없을 때 발생. 처리: 1) 인터럽트 발생 2) 디스크에서 페이지 로드 3) 페이지 테이블 갱신 4) 명령어 재실행. 과도한 Page Fault는 스래싱(Thrashing) 유발
- 페이지 교체 알고리즘: FIFO(오래된 것 교체), LRU(Least Recently Used), LFU(Least Frequently Used), Clock(Second Chance), Optimal(미래 참조 정보 필요, 이론적)
- 주소 변환: 논리 주소 → 페이지 테이블 → 물리 주소. TLB(Translation Lookaside Buffer) 캐시로 변환 속도 향상