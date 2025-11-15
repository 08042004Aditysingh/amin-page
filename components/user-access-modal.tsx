"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

interface UserAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserAccessModal({ open, onOpenChange }: UserAccessModalProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [validationResult, setValidationResult] = useState<{
    valid: boolean
    message: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const luhnCheck = (num: string): boolean => {
    let sum = 0
    let isEven = false

    for (let i = num.length - 1; i >= 0; i--) {
      let digit = Number.parseInt(num[i], 10)

      if (isEven) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit
      isEven = !isEven
    }

    return sum % 10 === 0
  }

  const handleValidate = () => {
    setIsLoading(true)
    const cleanNumber = cardNumber.replace(/\s/g, "")

    setTimeout(() => {
      if (cleanNumber.length < 13 || cleanNumber.length > 19) {
        setValidationResult({
          valid: false,
          message: "Card number must be between 13 and 19 digits",
        })
      } else if (!/^\d+$/.test(cleanNumber)) {
        setValidationResult({
          valid: false,
          message: "Card number must contain only digits",
        })
      } else if (luhnCheck(cleanNumber)) {
        setValidationResult({
          valid: true,
          message: "Card number is valid and secure ✓",
        })
      } else {
        setValidationResult({
          valid: false,
          message: "Invalid card number. Failed Luhn check",
        })
      }
      setIsLoading(false)
    }, 600)
  }

  const handleReset = () => {
    setCardNumber("")
    setValidationResult(null)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Card Validation</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Validate your credit card using Luhn algorithm
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="card-number" className="text-foreground font-semibold">
              Card Number
            </Label>
            <Input
              id="card-number"
              placeholder="Enter 13-19 digit card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              disabled={isLoading}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {validationResult && (
            <Card
              className={`border-2 p-4 ${validationResult.valid ? "border-primary/30 bg-primary/5" : "border-destructive/30 bg-destructive/5"}`}
            >
              <div className="flex items-start gap-3">
                {validationResult.valid ? (
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className={`font-semibold ${validationResult.valid ? "text-primary" : "text-destructive"}`}>
                    {validationResult.valid ? "Valid Card" : "Invalid Card"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{validationResult.message}</p>
                </div>
              </div>
            </Card>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleValidate}
              disabled={!cardNumber || isLoading}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              {isLoading ? "Validating..." : "Validate"}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
            >
              Clear
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
