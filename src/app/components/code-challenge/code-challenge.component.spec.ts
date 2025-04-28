import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeChallengeComponent } from './code-challenge.component';
import { UtilService } from '../../services/util.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting} from '@angular/common/http/testing';
 
 

describe('CodeChallengeComponent', () => {
  let component: CodeChallengeComponent;
  let fixture: ComponentFixture<CodeChallengeComponent>;
  let mockUtilService: jasmine.SpyObj<UtilService>;

  beforeEach(async () => {
    // Create the spy for UtilService
    mockUtilService = jasmine.createSpyObj('UtilService', ['subTextSearch']);

    // Setup the spy to return mock data
    mockUtilService.subTextSearch.and.returnValue(of([3, 6]));  // Fake data

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        CodeChallengeComponent,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [provideHttpClient(), provideHttpClientTesting(),
        FormBuilder, { provide: UtilService, useValue: mockUtilService } // Use the mocked service
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call subTextSearch and set character positions', () => {
    // Setup input values
    component.mainText = 'This is the main text';
    component.subText = 'is';

    // Call the method to trigger the service
    component.onSubmit();

    // Assert that subTextSearch was called with correct parameters
    expect(mockUtilService.subTextSearch).toHaveBeenCalledWith('This is the main text', 'is');

    // Assert that the component received the fake positions
    expect(component.characterPositions).toEqual([3, 6]);
    expect(component.searchPerformed).toBeTrue();
  });

});
