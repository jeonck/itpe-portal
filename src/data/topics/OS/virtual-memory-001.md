---
id: virtual-memory-001
title: 가상 메모리
category: technical-focus
subcategory: 운영체제
subjectCategories:
  - OS
difficulty: advanced
certifications:
  - computer-systems
keywords:
  - 페이징
  - 세그멘테이션
  - Page Fault
  - TLB
  - 페이지 교체
importance: 5
relatedTopics:
  - cache-memory-001
  - process-thread-001
trends:
  - 대용량 페이지(Huge Pages)
  - NVDIMM 기반 메모리
  - CXL 메모리 확장
  - 메모리 압축
---

# 정의
물리 메모리의 한계를 극복하기 위해 디스크를 보조 기억장치로 활용하여 논리적으로 큰 메모리 공간을 제공하는 기법입니다.

## 특징
- 페이징 vs 세그멘테이션: 페이징은 고정 크기 페이지(4KB)로 분할하여 외부 단편화 없음, 내부 단편화 존재. 세그멘테이션은 가변 크기 세그먼트(코드, 데이터, 스택)로 논리적 분할, 외부 단편화 발생. 현대 OS는 페이지드 세그멘테이션 혼합
- 페이지 부재(Page Fault): 요청한 페이지가 물리 메모리에 없을 때 발생. 처리: 1) 인터럽트 발생 2) 디스크에서 페이지 로드 3) 페이지 테이블 갱신 4) 명령어 재실행. 과도한 Page Fault는 스래싱(Thrashing) 유발
- 페이지 교체 알고리즘: FIFO(오래된 것 교체), LRU(Least Recently Used), LFU(Least Frequently Used), Clock(Second Chance), Optimal(미래 참조 정보 필요, 이론적)
- 주소 변환: 논리 주소 → 페이지 테이블 → 물리 주소. TLB(Translation Lookaside Buffer) 캐시로 변환 속도 향상