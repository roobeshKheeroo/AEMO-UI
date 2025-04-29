import { TestBed } from '@angular/core/testing';
import { UtilService } from './util.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UtilService', () => {
  let service: UtilService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UtilService]
    });

    service = TestBed.inject(UtilService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call subTextSearch with correct params and return data', () => {
    const mainText = 'This is a test string';
    const subText = 'is';
    const mockResponse = [3, 6];  // expected fake result

    service.subTextSearch(mainText, subText).subscribe(response => {
      expect(response).toEqual(mockResponse);  // Verify response matches
    });

    // Expect a GET request with correct URL and query parameters
    const req = httpMock.expectOne(request => 
      request.method === 'GET' &&
      request.url === 'https://localhost:7065/api/textutil/search' &&
      request.params.get('mainText') === mainText &&
      request.params.get('subText') === subText
    );

    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);  // Send the fake response
  });
});