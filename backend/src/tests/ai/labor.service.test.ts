import { LaborAIService } from '../../services/ai/labor.service';
import { Employee, Shift, Schedule } from '../../models/labor.model';

describe('LaborAIService', () => {
  let laborService: LaborAIService;

  beforeEach(() => {
    laborService = new LaborAIService();
  });

  describe('optimizeSchedule', () => {
    it('should optimize staff schedule successfully', async () => {
      const employees: Employee[] = [
        {
          id: '1',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          role: 'server',
          department: 'front_of_house',
          hourly_rate: 15,
          start_date: new Date(),
          is_active: true,
          availability: {
            monday: [{ start: '09:00', end: '17:00' }],
            tuesday: [{ start: '09:00', end: '17:00' }],
            wednesday: [{ start: '09:00', end: '17:00' }],
            thursday: [{ start: '09:00', end: '17:00' }],
            friday: [{ start: '09:00', end: '17:00' }],
            saturday: [{ start: '10:00', end: '18:00' }],
            sunday: [{ start: '10:00', end: '18:00' }],
          },
          skills: ['service', 'cashier'],
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const historicalData: Schedule[] = [
        {
          id: '1',
          week_start_date: new Date(),
          week_end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          department: 'front_of_house',
          shifts: [
            {
              id: '1',
              employee_id: '1',
              start_time: new Date(),
              end_time: new Date(Date.now() + 8 * 60 * 60 * 1000),
              break_duration: 30,
              position: 'server',
              status: 'completed',
              created_at: new Date(),
              updated_at: new Date(),
              created_by: 'user1',
              updated_by: 'user1',
            },
          ],
          status: 'published',
          total_hours: 40,
          total_cost: 600,
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const businessHours = {
        monday: { open: '09:00', close: '22:00' },
        tuesday: { open: '09:00', close: '22:00' },
        wednesday: { open: '09:00', close: '22:00' },
        thursday: { open: '09:00', close: '22:00' },
        friday: { open: '09:00', close: '23:00' },
        saturday: { open: '10:00', close: '23:00' },
        sunday: { open: '10:00', close: '22:00' },
      };

      const specialEvents = [
        {
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          type: 'special_event',
          expected_attendance: 100,
        },
      ];

      const result = await laborService.optimizeSchedule(
        employees,
        historicalData,
        businessHours,
        specialEvents
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('predictStaffingNeeds', () => {
    it('should predict staffing needs successfully', async () => {
      const historicalData: Schedule[] = [
        {
          id: '1',
          week_start_date: new Date(),
          week_end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          department: 'front_of_house',
          shifts: [],
          status: 'published',
          total_hours: 40,
          total_cost: 600,
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const upcomingEvents = [
        {
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          type: 'special_event',
          expected_attendance: 100,
        },
      ];

      const businessMetrics = {
        average_customer_spend: 25,
        peak_hours: ['12:00-14:00', '18:00-20:00'],
        service_time: 30, // minutes
      };

      const result = await laborService.predictStaffingNeeds(
        historicalData,
        upcomingEvents,
        businessMetrics
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });

  describe('analyzeLaborCosts', () => {
    it('should analyze labor costs successfully', async () => {
      const schedules: Schedule[] = [
        {
          id: '1',
          week_start_date: new Date(),
          week_end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          department: 'front_of_house',
          shifts: [],
          status: 'published',
          total_hours: 40,
          total_cost: 600,
          created_at: new Date(),
          updated_at: new Date(),
          created_by: 'user1',
          updated_by: 'user1',
        },
      ];

      const employeePerformance = [
        {
          employee_id: '1',
          date: new Date(),
          attendance: 1,
          punctuality: 1,
          customer_satisfaction: 4.5,
          efficiency: 0.9,
        },
      ];

      const result = await laborService.analyzeLaborCosts(
        schedules,
        employeePerformance
      );

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });
  });
}); 