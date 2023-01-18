import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-child.component.html',
  styleUrls: ['./standalone-child.component.css'],
})
export class StandaloneChildComponent implements OnInit {
  ngOnInit(): void {
    console.log('standalone child component created');
  }
}
