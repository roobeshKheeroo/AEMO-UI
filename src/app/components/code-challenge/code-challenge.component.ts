import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../services/util.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-code-challenge',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './code-challenge.component.html',
  styleUrl: './code-challenge.component.scss'
})
export class CodeChallengeComponent implements OnInit {
  myForm!: FormGroup;
  title = 'aemo-code-challenge';
  mainText: string = '';
  subText: string = '';
  searchPerformed: boolean = false;
  characterPositions: number[] = [];
  positionAsString: string = '';
  

  constructor (private searchUtilService: UtilService, private fb: FormBuilder) {}

  ngOnInit(): void {
   
    this.myForm = this.fb.group({
      mainText: ['', Validators.required],  // mainText must not be empty
      subText: ['', Validators.required]    // subText must not be empty
    });
  }

  onSubmit(): void {
    // this.searchText();
    //Call the api (localhost for testing)   
    this.searchUtilService.subTextSearch(this.mainText, this.subText)
      .subscribe({ 
        next: (result : number[]) => {
       this.characterPositions = result;       
       this.positionAsString = this.characterPositions.join(', ');
       this.searchPerformed = true;  
      },
      error: (err: Error) => {
        this.characterPositions = [];        
      }
    });
  }


  searchSubText(mainText: string, subText: string): number[] {
    const positions: number[] = [];
  
    let index = 0;
    const lowerMainText = mainText.toLowerCase();
    const lowerSubText = subText.toLowerCase();
  
    while ((index = lowerMainText.indexOf(lowerSubText, index)) !== -1) {
      positions.push(index + 1); // Store position (1-based index)     
      index += 1; // Move past current match
    }  

    return positions;
  }


  searchText() {
    this.characterPositions = this.searchSubText(this.mainText, this.subText);
    if (this.characterPositions.length > 0) {             
      this.positionAsString = this.characterPositions.join(', ');
      this.searchPerformed = true;  
    }    
  }

}
 

