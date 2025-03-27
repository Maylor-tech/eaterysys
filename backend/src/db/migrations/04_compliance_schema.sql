-- Create compliance_tasks table
CREATE TABLE compliance_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    frequency TEXT NOT NULL CHECK (frequency IN ('daily', 'weekly', 'monthly', 'quarterly', 'yearly')),
    priority TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    due_date DATE NOT NULL,
    completed_date DATE,
    status TEXT NOT NULL CHECK (status IN ('pending', 'in_progress', 'completed', 'overdue')),
    assigned_to UUID REFERENCES users(id),
    evidence_required BOOLEAN DEFAULT false,
    attachments TEXT[],
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
);

-- Create inspections table
CREATE TABLE inspections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type TEXT NOT NULL,
    inspector TEXT NOT NULL,
    date DATE NOT NULL,
    score INTEGER CHECK (score >= 0 AND score <= 100),
    status TEXT NOT NULL CHECK (status IN ('scheduled', 'in_progress', 'completed', 'failed')),
    findings JSONB NOT NULL,
    attachments TEXT[],
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
);

-- Create compliance_documents table
CREATE TABLE compliance_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    expiry_date DATE,
    status TEXT NOT NULL CHECK (status IN ('active', 'expired', 'pending_renewal')),
    document_url TEXT NOT NULL,
    version TEXT NOT NULL,
    notes TEXT,
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
);

-- Create compliance_violations table
CREATE TABLE compliance_violations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    inspection_id UUID REFERENCES inspections(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    severity TEXT NOT NULL CHECK (severity IN ('minor', 'major', 'critical')),
    corrective_action TEXT NOT NULL,
    due_date DATE NOT NULL,
    resolved_date DATE,
    status TEXT NOT NULL CHECK (status IN ('open', 'in_progress', 'resolved')),
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    updated_by UUID REFERENCES users(id)
); 