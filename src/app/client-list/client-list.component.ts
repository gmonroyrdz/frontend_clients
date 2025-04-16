import { Component, OnInit, ViewChild } from '@angular/core';
import { Client, ClientsService } from '../services/clients.service';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {
  dataSource = new MatTableDataSource<Client>(); // Usar MatTableDataSource
  displayedColumns: string[] = ['id', 'name', 'lastName', 'age', 'calle', 'colonia', 'ciudad', 'pais'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.dataSource.data = data; // Asignar los datos al MatTableDataSource
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // Asignar MatSort al MatTableDataSource
  }
}
