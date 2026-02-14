import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule]
})
export class Home implements OnInit, OnDestroy {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  
  // Företagsklockan
  years: number = 0;
  months: number = 0;
  days: number = 0;

  
  private intervalId: any;
  private startDate = new Date(2015, 2, 1); // 1 mars 2015 (månad är 0-indexerad)

  ngOnInit() {
    this.updateCompanyClock();
    // Uppdatera klockan varje sekund
    this.intervalId = setInterval(() => {
      this.updateCompanyClock();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCompanyClock() {
    const now = new Date();
    const diff = now.getTime() - this.startDate.getTime();
    
    // Beräkna total tid i sekunder
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // Beräkna år och månader
    let years = 0;
    let months = 0;
    let tempDate = new Date(this.startDate);
    
    while (tempDate < now) {
      const nextYear = new Date(tempDate);
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      if (nextYear <= now) {
        years++;
        tempDate = nextYear;
      } else {
        break;
      }
    }
    
    while (tempDate < now) {
      const nextMonth = new Date(tempDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      if (nextMonth <= now) {
        months++;
        tempDate = nextMonth;
      } else {
        break;
      }
    }
    
    // Beräkna återstående dagar, timmar, minuter och sekunder
    const remainingTime = now.getTime() - tempDate.getTime();
    const remainingSeconds = Math.floor(remainingTime / 1000);
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    const remainingHours = Math.floor(remainingMinutes / 60);
    const remainingDays = Math.floor(remainingHours / 24);
    
    this.years = years;
    this.months = months;
    this.days = remainingDays;
  }
}