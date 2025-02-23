import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangBarComponent } from './lang-bar.component';

describe('LangBarComponent', () => {
  let component: LangBarComponent;
  let fixture: ComponentFixture<LangBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
