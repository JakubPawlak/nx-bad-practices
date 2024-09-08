import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiButtonWithIconComponent } from './ui-button-with-icon.component';

describe('UiButtonWithIconComponent', () => {
  let component: UiButtonWithIconComponent;
  let fixture: ComponentFixture<UiButtonWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtonWithIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
