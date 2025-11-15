"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Activity } from "lucide-react"

interface AdminAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Mock data for ML anomaly detection
const mockAnomalies = [
  {
    id: 1,
    type: "High-Value Transaction",
    risk: "Medium",
    amount: "$5,240",
    timestamp: "2 mins ago",
    status: "Flagged",
  },
  {
    id: 2,
    type: "Unusual Location",
    risk: "High",
    amount: "$1,850",
    timestamp: "15 mins ago",
    status: "Alert",
  },
  {
    id: 3,
    type: "Rapid Transactions",
    risk: "Medium",
    amount: "$3,120",
    timestamp: "1 hour ago",
    status: "Review",
  },
]

const mockStats = [
  { label: "Transactions", value: "12,458", icon: Activity },
  { label: "Anomalies", value: "37", icon: AlertTriangle },
  { label: "Success Rate", value: "98.7%", icon: TrendingUp },
]

export function AdminAccessModal({ open, onOpenChange }: AdminAccessModalProps) {
  const [selectedAnomaly, setSelectedAnomaly] = useState<number | null>(null)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">Admin Dashboard</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            ML-Powered Payment Anomaly Detection System
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {mockStats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card
                  key={stat.label}
                  className="p-4 bg-background border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                    <Icon className="w-4 h-4 text-primary/60" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </Card>
              )
            })}
          </div>

          {/* Anomalies List */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Recent Anomalies</h3>
            <div className="space-y-2">
              {mockAnomalies.map((anomaly) => (
                <Card
                  key={anomaly.id}
                  onClick={() => setSelectedAnomaly(selectedAnomaly === anomaly.id ? null : anomaly.id)}
                  className={`p-4 bg-background border-border/50 cursor-pointer transition-all hover:border-primary/30 ${
                    selectedAnomaly === anomaly.id ? "border-primary/50 bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{anomaly.type}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">{anomaly.timestamp}</span>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-md ${
                            anomaly.risk === "High" ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"
                          }`}
                        >
                          {anomaly.risk} Risk
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{anomaly.amount}</p>
                      <p className="text-xs text-muted-foreground mt-1">{anomaly.status}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              View Full Report
            </Button>
            <Button variant="outline" className="flex-1 border-border text-foreground hover:bg-muted bg-transparent">
              Export Data
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
