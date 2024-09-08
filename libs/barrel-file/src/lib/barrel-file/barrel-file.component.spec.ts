import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarrelFileComponent } from './barrel-file.component';

describe('BarrelFileComponent', () => {
  let component: BarrelFileComponent;
  let fixture: ComponentFixture<BarrelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrelFileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarrelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
