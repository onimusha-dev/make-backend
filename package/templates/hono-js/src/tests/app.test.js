import { describe, it, expect } from 'vitest';
import app from '../app.js';

describe('GET /api/health', () => {
    it('should return 200 OK and healthy status', async () => {
        const res = await app.request('/api/health');
        expect(res.status).toBe(200);
        const body = await res.json();
        expect(body.success).toBe(true);
        expect(body.data.status).toBe('healthy');
    });
});
